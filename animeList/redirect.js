document.getElementById("submitButton").addEventListener("click", function() {
  if (checkCode()) {
    window.location.href = "gradually.html";
  }
});
document.getElementById("passwordInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    if (checkCode()) {
      window.location.href = "gradually.html";
    }
  }
});
function checkCode() {
  var code = document.getElementById("passwordInput").value;
  if (code === "railgun") {
    return true;
  } else {
    alert("Incorrect password. Please try again.");
    return false;
  }
}
