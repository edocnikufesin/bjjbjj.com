function hideStuff(listID) {
  var x = document.getElementById(listID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
