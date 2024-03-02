document.getElementById("page0to1").addEventListener("click", function () {
  var name = document.getElementById("userName1").value;
  if (name === "") name = "USERNAME";
  localStorage.setItem("name", name);
  document.getElementById("UserName").innerText = name;
  document.getElementById("q0").style.display = "none";
  document.getElementById("q11").style.display = "none";
  document.getElementById("q1").style.display = "block";

  // console.log(GetRecommendation(2));
});

document.getElementById("page1to2a").addEventListener("click", function () {
  localStorage.setItem("q1", 1);
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "block";
});

document.getElementById("page1to2b").addEventListener("click", function () {
  localStorage.setItem("q1", 2);
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "block";
});

document.getElementById("page2to3a").addEventListener("click", function () {
  localStorage.setItem("q2", 1);
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "block";
});

document.getElementById("page2to3b").addEventListener("click", function () {
  localStorage.setItem("q2", 2);
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "block";
});

document.getElementById("page3to4a").addEventListener("click", function () {
  localStorage.setItem("q3", 1);
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "block";
});

document.getElementById("page3to4b").addEventListener("click", function () {
  localStorage.setItem("q3", 2);
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "block";
});

document.getElementById("page4to5a").addEventListener("click", function () {
  localStorage.setItem("q4", 1);
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "block";
});

document.getElementById("page4to5b").addEventListener("click", function () {
  localStorage.setItem("q4", 2);
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "block";
});

document.getElementById("page5to6a").addEventListener("click", function () {
  localStorage.setItem("q5", 1);
  document.getElementById("q5").style.display = "none";
  document.getElementById("q6").style.display = "block";
});

document.getElementById("page5to6b").addEventListener("click", function () {
  localStorage.setItem("q5", 2);
  document.getElementById("q5").style.display = "none";
  document.getElementById("q6").style.display = "block";
});

document.getElementById("page6to7a").addEventListener("click", function () {
  localStorage.setItem("q6", 1);
  document.getElementById("q6").style.display = "none";
  document.getElementById("q7").style.display = "block";
});

document.getElementById("page6to7b").addEventListener("click", function () {
  localStorage.setItem("q6", 2);
  document.getElementById("q6").style.display = "none";
  document.getElementById("q7").style.display = "block";
});

document.getElementById("page7to8a").addEventListener("click", function () {
  localStorage.setItem("q7", 1);
  document.getElementById("q7").style.display = "none";
  document.getElementById("q8").style.display = "block";
});

document.getElementById("page7to8b").addEventListener("click", function () {
  localStorage.setItem("q7", 2);
  document.getElementById("q7").style.display = "none";
  document.getElementById("q8").style.display = "block";
});

document.getElementById("page8to9a").addEventListener("click", function () {
  localStorage.setItem("q8", 1);
  document.getElementById("q8").style.display = "none";

  document.getElementById("q9").style.display = "block";
});

document.getElementById("page8to9b").addEventListener("click", function () {
  localStorage.setItem("q8", 2);
  document.getElementById("q8").style.display = "none";
  document.getElementById("q9").style.display = "block";
});

document.getElementById("page9to10a").addEventListener("click", function () {
  localStorage.setItem("q9", 1);
  document.getElementById("q9").style.display = "none";
  document.getElementById("q10").style.display = "block";
});
function getParticularUser(userID) {
  return fetch(`http://localhost:8000/particular_user/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        alert("WAIT");
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON response
    })
    .then((data) => {
      const user = data[0];
      if (user) {
        const name = user.Username;
        const avatarId = user.Avatar;
        return { name, avatarId }; // Return object with username and avatarId
      } else {
        throw new Error("User not found!");
      }
    })
    .catch((error) => {
      alert("WAIT");
      console.error("Error sending data:", error);
      throw error; // Rethrow the error to be caught by the caller
    });
}

var names = [];
var avatars = [];
function GetRecommendation(userID) {
  console.log("Request URL:", `http://localhost:8000/recommend/${userID}`);
  fetch(`http://localhost:8000/recommend/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Assuming you're sending JSON data
    },
  })
    .then((response) => {
      if (!response.ok) {
        alert("WAIT");
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // alert("Your recommendation is: "); // Alert to indicate the recommendation data is received
      console.log("Data received successfully:", data);
      localStorage.setItem("rec1", data.users[0]);
      localStorage.setItem("rec2", data.users[1]);
      localStorage.setItem("rec3", data.users[2]);
      localStorage.setItem("rec4", data.users[3]);
    })

    .catch((error) => {
      alert("WAIT");
      console.error("Error sending data:", error);
    });
}

document.getElementById("page9to10b").addEventListener("click", function () {
  localStorage.setItem("q9", 2);
  document.getElementById("q9").style.display = "none";

  document.getElementById("q10").style.display = "block";
});

document.getElementById("page10to11a").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("q10").style.display = "none";
  document.getElementById("q12").style.display = "block";

  localStorage.setItem("q10", 1);
  const formattedData = [
    localStorage.getItem("q1"),
    localStorage.getItem("q2"),
    localStorage.getItem("q3"),
    localStorage.getItem("q4"),
    localStorage.getItem("q5"),
    localStorage.getItem("q6"),
    localStorage.getItem("q7"),
    localStorage.getItem("q8"),
    localStorage.getItem("q9"),
    localStorage.getItem("q10"),
    localStorage.getItem("name"),
    localStorage.getItem("avaid"),
  ];
  console.log(formattedData);

  fetch("https://tcg65n6c-8000.inc1.devtunnels.ms/add_user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Assuming you're sending JSON data
    },
    body: JSON.stringify(formattedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Text:", data.text);
      console.log("User ID:", data.user_id);

      console.log("Recommendation:", data.recommendation);

      data.recommendation.forEach((userID) => {
        getParticularUser(userID)
          .then((user) => {
            const name = user.name;
            const avatarId = user.avatarId;

            names.push(name);
            avatars.push(avatarId);
          })
          .catch((error) => {
            console.error("Error getting particular user:", error);
          });
      });
      console.log(names);
      console.log(avatars);
      localStorage.setItem("rec1", names[1]);
      localStorage.setItem("rec2", names[2]);
      localStorage.setItem("rec3", names[3]);
      localStorage.setItem("rec_ava1", avatars[1]);
      localStorage.setItem("rec_ava2", avatars[2]);
      localStorage.setItem("rec_ava3", avatars[3]);
      document.getElementById("q12").style.display = "block";
      document.getElementById("final_page_p_img").src = giveImgUrl(
        localStorage.getItem("avaid")
      );
      document.getElementById("final_page_username").innerText =
        localStorage.getItem("name");

      document.getElementById("recom_1_img").src = giveImgUrl(
        localStorage.getItem("rec_ava1")
      );
      document.getElementById("recom_1_username").innerHTML =
        localStorage.getItem("rec1");
      document.getElementById("recom_2_img").src = giveImgUrl(
        localStorage.getItem("rec_ava2")
      );
      document.getElementById("recom_2_username").innerHTML =
        localStorage.getItem("rec2");
      document.getElementById("recom_3_img").src = giveImgUrl(
        localStorage.getItem("rec_ava3")
      );
      document.getElementById("recom_3_username").innerHTML =
        localStorage.getItem("rec3");

      document.getElementById("q10").style.display = "none";
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
});

document.getElementById("page10to11b").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("q10").style.display = "none";
  document.getElementById("q12").style.display = "block";

  console.log("HI");
  localStorage.setItem("q10", 2);
  const formattedData = [
    localStorage.getItem("q1"),
    localStorage.getItem("q2"),
    localStorage.getItem("q3"),
    localStorage.getItem("q4"),
    localStorage.getItem("q5"),
    localStorage.getItem("q6"),
    localStorage.getItem("q7"),
    localStorage.getItem("q8"),
    localStorage.getItem("q9"),
    localStorage.getItem("q10"),
    localStorage.getItem("name"),
    localStorage.getItem("avaid"),
  ];
  console.log(formattedData);

  fetch("https://tcg65n6c-8000.inc1.devtunnels.ms/add_user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Assuming you're sending JSON data
    },
    body: JSON.stringify(formattedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Text:", data.text);
      console.log("User ID:", data.user_id);
      console.log("Recommendation:", data.recommendation);

      // document.getElementById("firstUser").innerText = names[0];
      // document.getElementById("secondUser").innerText = names[1];

      // document.getElementById("q10").style.display = "none";
    })
    .catch((error) => {
      console.error("Error sending data:", error);

      document.getElementById("q10").style.display = "none";
      document.getElementById("q12").style.display = "block";
    });

  document.getElementById("q10").style.display = "none";
  document.getElementById("q12").style.display = "block";
});

function giveImgUrl(avaid) {
  if (avaid === "1") {
    return "./Images/4043270-avatar-joker-squad-suicide-woman_113256.svg";
  } else if (avaid == "2") {
    return "./Images/batman_90804.svg";
  } else if (avaid === "3") {
    return "./Images/cristianoronaldo_90805.svg";
  } else if (avaid === "4") {
    return "./Images/nativeman_90827.svg";
  } else if (avaid === "5") {
    return "./Images/robot01_90832.svg";
  } else if (avaid === "6") {
    return "./Images/trinity_90829.svg";
  } else if (avaid === "7") {
    return "./Images/indianwoman_90828.svg";
  } else {
    return "./Images/charliechaplin_90809.svg";
  }
}

var avaid = 0;
document
  .getElementById("userAvatarSubmit")
  .addEventListener("click", function () {
    //console.log("CLCIK");
    var name = document.getElementById("avatarId").value;
    avaid = name;
    localStorage.setItem("avaid", avaid);
    //console.log(name);
    if (name === "1") {
      document.getElementById("UserAvatar").src =
        "./Images/4043270-avatar-joker-squad-suicide-woman_113256.svg";
    } else if (name === "2") {
      document.getElementById("UserAvatar").src = "./Images/batman_90804.svg";
    } else if (name === "3") {
      document.getElementById("UserAvatar").src =
        "./Images/cristianoronaldo_90805.svg";
    } else if (name === "4") {
      document.getElementById("UserAvatar").src =
        "./Images/nativeman_90827.svg";
    } else if (name === "5") {
      document.getElementById("UserAvatar").src = "./Images/robot01_90832.svg";
    } else if (name === "6") {
      document.getElementById("UserAvatar").src = "./Images/trinity_90829.svg";
    } else if (name === "7") {
      document.getElementById("UserAvatar").src =
        "./Images/indianwoman_90828.svg";
    } else {
      document.getElementById("UserAvatar").src =
        "./Images/charliechaplin_90809.svg";
    }
  });
