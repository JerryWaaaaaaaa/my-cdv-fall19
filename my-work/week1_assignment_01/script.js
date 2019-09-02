


function createSquare(){

  document.getElementById("square_container").innerHTML = " ";

  var squareNum = document.getElementById("square_number").value;

  for(var i = 0; i < squareNum; i ++){
    var square = document.createElement("DIV");
    square.className = "square_item";
    console.log("square created!");
    document.getElementById("square_container").appendChild(square);
  }

}

document.getElementById("create_square").addEventListener("click", createSquare);
