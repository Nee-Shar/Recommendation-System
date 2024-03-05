console.log(localStorage.getItem("rec1"));
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
