import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from joblib import dump

# Load dataset
df = pd.read_csv('dataset.csv')

# Select features (X) and target (y)
X = df.iloc[:, :10]  # First 10 columns
y = df.iloc[:, 12]   # 13th column

# Number of neighbors
k = 4

# Create KNN classifier
knn = KNeighborsClassifier(n_neighbors=k)

# Fit the model
knn.fit(X, y)

# Test the model for k neighbours for each user
def recommend(user_id):
    # User's data
    user_data = df[df['id'] == user_id].iloc[:, :10]  # First 10 columns
    # Get the k nearest neighbors
    neighbors = knn.kneighbors(user_data, return_distance=False)
    # Get the user IDs
    neighbors_users = df.iloc[neighbors[0], -1].tolist()  # Convert to list
    print(neighbors_users)

recommend(1)

# Save the model
dump(knn, 'recommender.joblib')
