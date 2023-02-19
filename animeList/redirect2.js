document.getElementById("submitButton").addEventListener("click", function() {
    if (checkCode()) {
      window.location.href = "rating.html";
    }
  });
  document.getElementById("codeInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      if (checkCode()) {
        window.location.href = "rating.html";
      }
    }
  });
  function checkCode() {
    var code = document.getElementById("codeInput").value;
    if (code === "6207") {
      return true;
    } else {
      alert("Incorrect code. Please try again.");
      return false;
    }
  }
  