/*
	Part  2
  
	Implement the code to move the chessman on the clicked chess cell.
	It does not have to move like real knight figure, no validation is required.
*/

var chessboardCell = document.querySelectorAll('.chessboard__cell');



for (var i=chessboardCell.length; i--;) {
    chessboardCell[i].addEventListener('click', fn, false);
}

function fn() {
  var chessman = document.getElementsByClassName("chessman--knight")[0];
  this.appendChild(chessman);
}