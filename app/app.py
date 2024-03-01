import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List,Union
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import numpy as np

from sklearn.neighbors import KNeighborsClassifier

from joblib import dump

# Create the app
app = FastAPI()

# Add CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)
def retrain_model(df):
    # Select features (X) and target (y)
    X = df.iloc[:, :10]
    y = df.iloc[:, 12]

    # Number of neighbors
    k = 4

    # Create KNN classifier
    knn = KNeighborsClassifier(n_neighbors=k)

    # Fit the model
    knn.fit(X, y)
    dump(knn, 'recommender.joblib')


# Define the request body
class User(BaseModel):
    user_id: int    

# Define the response body
class Recommendation(BaseModel):
    users: List[int]

class NewUser(BaseModel):
    user_data: List[Union[int, str]]

# Define the endpoint

@app.get('/')
async def index():
    return {"text": "Hello from the recommender system! Please use the /recommend endpoint to get recommendations."}

@app.get('/particular_user/{user_id}')
async def particular_user(user_id: int):
    df = pd.read_csv('dataset.csv')
    user_data = df[df['id'] == user_id].iloc[:, 10:12]  # Selecting 11th and 12th fields
    if user_data.empty:
        return {"text": "User not found!"}
    return user_data.to_dict(orient='records')



@app.get('/recommend/{user_id}')
async def recommend(user_id: int):
    # Load the model
    knn = joblib.load('recommender.joblib')
    df = pd.read_csv('dataset.csv')
    user_data = df[df['id'] == user_id].iloc[:, :10]
    if(user_data.empty):
        return {"text": "User not found!"}
    neighbors = knn.kneighbors(user_data, return_distance=False)
    neighbors_users = df.iloc[neighbors[0], -1].tolist()
    return Recommendation(users=neighbors_users)


# @app.post('/add_user')
# async def add_user(new_user_data: List[Union[int, str]]):

#     df = pd.read_csv('dataset.csv')
#     new_user_id = df['id'].max() + 1
#     new_user = pd.DataFrame([new_user_data], columns=df.columns[:-1])
#     new_user['id'] = new_user_id
#     df = pd.concat([df, new_user], ignore_index=True)
#     df.to_csv('dataset.csv', index=False)
#     retrain_model(df)
#     return {"text": "User added successfully!", "user_id": int(new_user_id)}

@app.post('/add_user')
async def add_user(new_user_data: List[Union[int, str]]):
    df = pd.read_csv('dataset.csv')
    new_user_id = df['id'].max() + 1
    new_user = pd.DataFrame([new_user_data], columns=df.columns[:-1])
    new_user['id'] = new_user_id
    df = pd.concat([df, new_user], ignore_index=True)
    df.to_csv('dataset.csv', index=False)
    retrain_model(df)
    
    # After adding the user, run recommendation for the new user
    recommendation_result = await recommend(new_user_id)
    neighbors_users = recommendation_result.users
    
    return {"text": "User added successfully!", "user_id": int(new_user_id), "recommendation": neighbors_users}
