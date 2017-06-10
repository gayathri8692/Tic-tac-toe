console.log("app.js is connected");
var clickCount = 0;
var playerId;
var won = false;
var table = document.getElementById("ticTacToe");
table.addEventListener("click", game);

function game(event) {
  clickCount = clickCount + 1;
  var cell = event.target.id;
  if (clickCount % 2 === 0) {
    playerId = 2;
    if (document.getElementById(cell).innerHTML !== "") {
      alert("INCORRECT MOVE");
      clickCount = clickCount - 1;
    } else {
      document.getElementById(cell).innerHTML = "O";
      document.getElementById(cell).setAttribute("class", "playerTwo");
    }
  } else {
    playerId = 1;
    if (document.getElementById(cell).innerHTML !== "") {
      alert("INCORRECT MOVE");
      clickCount = clickCount - 1;
    } else {
      document.getElementById(cell).innerHTML = "X";
      document.getElementById(cell).setAttribute("class", "playerOne");
    }
  }

  var r0c0 = document.getElementById("00").innerHTML;
  var r0c1 = document.getElementById("01").innerHTML;
  var r0c2 = document.getElementById("02").innerHTML;
  var r1c0 = document.getElementById("10").innerHTML;
  var r1c1 = document.getElementById("11").innerHTML;
  var r1c2 = document.getElementById("12").innerHTML;
  var r2c0 = document.getElementById("20").innerHTML;
  var r2c1 = document.getElementById("21").innerHTML;
  var r2c2 = document.getElementById("22").innerHTML;

  if (r0c0 === r0c1 && r0c1 === r0c2 && r0c0 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (r1c0 === r1c1 && r1c1 === r1c2 && r1c0 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (r2c0 === r2c1 && r2c1 === r2c2 && r2c0 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (r0c0 === r1c0 && r1c0 === r2c0 && r1c0 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (r0c1 === r1c1 && r1c1 === r2c1 && r0c1 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (r0c2 === r1c2 && r1c2 === r2c2 && r0c2 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (r0c0 === r1c1 && r1c1 === r2c2 && r2c2 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (r2c0 === r1c1 && r1c1 === r0c2 && r1c1 !== "") {
    alert("PLAYER " + playerId + " is the WINNER");
    won = true;
    reset();
  }
  if (clickCount === 9 && won === false) {
    alert("ITS A TIE!!!");
    reset();
  }
}

function reset() {
  clickCount = 0;
  document.getElementById("00").innerHTML = "";
  document.getElementById("01").innerHTML = "";
  document.getElementById("02").innerHTML = "";
  document.getElementById("10").innerHTML = "";
  document.getElementById("11").innerHTML = "";
  document.getElementById("12").innerHTML = "";
  document.getElementById("21").innerHTML = "";
  document.getElementById("22").innerHTML = "";
  document.getElementById("20").innerHTML = "";
}
