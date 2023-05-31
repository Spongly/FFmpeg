function showCommand() {
    var select = document.getElementById("command-select");
    var commandId = select.value;
    var commandDivs = document.getElementsByClassName("command");
  
    for (var i = 0; i < commandDivs.length; i++) {
      if (commandDivs[i].id === commandId) {
        commandDivs[i].style.display = "block";
      } else {
        commandDivs[i].style.display = "none";
      }
    }
  }
  