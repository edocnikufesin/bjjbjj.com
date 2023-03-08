function toggleList(listId) {
  var x = document.getElementById(listId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function swapIcon(iconId) {
  var y = document.getElementById(iconId);
  y.classList.toggle("fa-caret-up");
  y.classList.toggle("fa-caret-down");
}

function hideStuff(x,y) {
  toggleList(x);
  swapIcon(y);
}
