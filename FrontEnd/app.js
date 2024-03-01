document.getElementById("page1to2").addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("userName1").value;
  if (name === "") name = "USERNAME";
  document.getElementById("UserName").innerText = name;
  console.log("hi");
  var id = document.querySelectorAll("input")[0].value;
  var name = document.getElementById("userName1").value;
  var emoji = document.getElementById("emoji").value;
  formsData = {
    Id: id,
    Name: name,
    Emoji: emoji,
    AvatarId: avaid,
  };
  console.log(formsData);
  localStorage.setItem(`Basic_Info`, JSON.stringify(formsData));
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
});

document.getElementById("page2to3").addEventListener("click", function (e) {
  e.preventDefault();
  var q1 = document.querySelectorAll("input")[3].value;

  var q2 = document.querySelectorAll("input")[4].value;

  var q3 = document.querySelectorAll("input")[5].value;

  var q4 = document.querySelectorAll("input")[6].value;

  var q5 = document.querySelectorAll("input")[7].value;

  let storedData = JSON.parse(localStorage.getItem("Basic_Info"));
  storedData.first = q1.toString();
  storedData.second = q2.toString();
  storedData.third = q3.toString();
  storedData.fourth = q4.toString();
  storedData.fifth = q5.toString();

  localStorage.setItem("Basic_Info", JSON.stringify(storedData));

  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
});

document.getElementById("page3to4").addEventListener("click", function () {
  var q1 = document.querySelectorAll("input")[8].value;

  var q2 = document.querySelectorAll("input")[9].value;

  var q3 = document.querySelectorAll("input")[10].value;

  var q4 = document.querySelectorAll("input")[11].value;

  var q5 = document.querySelectorAll("input")[12].value;

  var q6 = document.querySelectorAll("input")[13].value;

  var q7 = document.querySelectorAll("input")[14].value;

  let storedData = JSON.parse(localStorage.getItem("Basic_Info"));
  storedData.sixth = q1.toString();
  storedData.seventh = q2.toString();
  storedData.eighth = q3.toString();
  storedData.ninth = q4.toString();
  storedData.tenth = q5.toString();
  storedData.eleventh = q6.toString();
  storedData.twelfth = q7.toString();

  localStorage.setItem("Basic_Info", JSON.stringify(storedData));

  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page4").classList.remove("hidden");
});

document.getElementById("page4to5").addEventListener("click", function () {
  var q1 = document.querySelectorAll("input")[15].value;

  var q2 = document.querySelectorAll("input")[16].value;

  var q3 = document.querySelectorAll("input")[17].value;

  var q4 = document.querySelectorAll("input")[18].value;

  var q5 = document.querySelectorAll("input")[19].value;

  let storedData = JSON.parse(localStorage.getItem("Basic_Info"));
  storedData.thirteen = q1.toString();
  storedData.fourteen = q2.toString();
  storedData.fifteen = q3.toString();
  storedData.sixteen = q4.toString();
  storedData.seventeen = q5.toString();

  localStorage.setItem("Basic_Info", JSON.stringify(storedData));

  document.getElementById("page4").classList.add("hidden");
  document.getElementById("page5").classList.remove("hidden");
});

document.getElementById("page5to6").addEventListener("click", function () {
  var q1 = document.querySelectorAll("input")[20].value;

  var q2 = document.querySelectorAll("input")[21].value;

  var q3 = document.querySelectorAll("input")[22].value;

  var q4 = document.querySelectorAll("input")[23].value;

  var q5 = document.querySelectorAll("input")[24].value;

  let storedData = JSON.parse(localStorage.getItem("Basic_Info"));
  storedData.eighteen = q1.toString();
  storedData.nineteen = q2.toString();
  storedData.twenty = q3.toString();
  storedData.twentyone = q4.toString();
  storedData.twentytwo = q5.toString();

  localStorage.setItem("Basic_Info", JSON.stringify(storedData));

  document.getElementById("page5").classList.add("hidden");
  document.getElementById("page6").classList.remove("hidden");
});

document.getElementById("page6to7").addEventListener("click", function () {
  var q1 = document.querySelectorAll("input")[25].value;

  var q2 = document.querySelectorAll("input")[26].value;

  var q3 = document.querySelectorAll("input")[27].value;

  var q4 = document.querySelectorAll("input")[28].value;

  var q5 = document.querySelectorAll("input")[29].value;

  let storedData = JSON.parse(localStorage.getItem("Basic_Info"));
  storedData.twentythree = q1.toString();
  storedData.twentyfour = q2.toString();
  storedData.twentyfive = q3.toString();
  storedData.twentysix = q4.toString();
  storedData.twentyseven = q5.toString();

  localStorage.setItem("Basic_Info", JSON.stringify(storedData));

  document.getElementById("page6").classList.add("hidden");
  document.getElementById("page7").classList.remove("hidden");
});

document.getElementById("page7to8").addEventListener("click", function (e) {
  var q1 = document.querySelectorAll("input")[30].value;

  var q2 = document.querySelectorAll("input")[31].value;

  var q3 = document.querySelectorAll("input")[32].value;

  var q4 = document.querySelectorAll("input")[33].value;

  var q5 = document.querySelectorAll("input")[34].value;

  var q5 = document.querySelectorAll("input")[35].value;

  let storedData = JSON.parse(localStorage.getItem("Basic_Info"));
  storedData.twentyteight = String(q1);
  storedData.twentynine = String(q2);
  storedData.thirty = String(q3);
  storedData.thirtyone = String(q4);
  storedData.thirtytwo = String(q5);

  var name = storedData.AvatarId;
  console.log(name);
  if (name === "1") {
    document.getElementById("avatarineed").src =
      "./Images/4043270-avatar-joker-squad-suicide-woman_113256.svg";
  } else if (name === "2") {
    document.getElementById("avatarineed").src = "./Images/batman_90804.svg";
  } else if (name === "3") {
    document.getElementById("avatarineed").src =
      "./Images/cristianoronaldo_90805.svg";
  } else if (name === "4") {
    document.getElementById("avatarineed").src = "./Images/nativeman_90827.svg";
  } else if (name === "5") {
    document.getElementById("avatarineed").src = "./Images/robot01_90832.svg";
  } else if (name === "6") {
    document.getElementById("avatarineed").src = "./Images/trinity_90829.svg";
  } else if (name === "7") {
    document.getElementById("avatarineed").src =
      "./Images/indianwoman_90828.svg";
  } else {
    document.getElementById("avatarineed").src =
      "./Images/charliechaplin_90809.svg";
  }
  document.getElementById("ineedusername").innerHTML = storedData.Name;

  localStorage.setItem("Basic_Info", JSON.stringify(storedData));

  const myObj = JSON.parse(localStorage.getItem("Basic_Info"));

  const formattedData = [
    myObj.first.toString(),
    myObj.second.toString(),
    myObj.third.toString(),
    myObj.fourth.toString(),
    myObj.fifth.toString(),
    myObj.sixth.toString(),
    myObj.seventh.toString(),
    myObj.eighth.toString(),
    myObj.ninth.toString(),
    myObj.tenth.toString(),
    myObj.eleventh.toString(),
    myObj.twelfth.toString(),
    myObj.thirteen.toString(),
    myObj.fourteen.toString(),
    myObj.fifteen.toString(),
    myObj.sixteen.toString(),
    myObj.seventeen.toString(),
    myObj.eighteen.toString(),
    myObj.nineteen.toString(),
    myObj.twenty.toString(),
    myObj.twentyone.toString(),
    myObj.twentytwo.toString(),
    myObj.twentythree.toString(),
    myObj.twentyfour.toString(),
    myObj.twentyfive.toString(),
    myObj.twentysix.toString(),
    myObj.twentyseven.toString(),
    myObj.twentyteight.toString(),
    myObj.twentynine.toString(),
    myObj.thirty.toString(),
    myObj.thirtyone.toString(),
    myObj.thirtytwo.toString(),
    myObj.Id.toString(),
    myObj.Name.toString(),
    myObj.Emoji.toString(),
    myObj.AvatarId.toString(),
  ];

  // const formattedData = orderedFields.map((item) => String(item));
  console.log(formattedData);
  e.preventDefault();
  fetch("http://localhost:8000/add_user", {
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
      console.log("Data sent successfully:", data);

      document.getElementById("page7").classList.add("hidden");
      document.getElementById("page8").classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
});

var avaid = 0;
document
  .getElementById("userAvatarSubmit")
  .addEventListener("click", function () {
    //console.log("CLCIK");
    var name = document.getElementById("avatarId").value;
    avaid = name;
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
