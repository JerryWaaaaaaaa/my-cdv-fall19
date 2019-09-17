


function createSquare(){

  // clear the square-drawing area
  document.getElementById("square_container").innerHTML = " ";

  // get the user input
  var squareNum = document.getElementById("square_number").value;

  // draw the squares based on the user input
  for(var i = 0; i < squareNum; i ++){
    // create a div element
    var square = document.createElement("DIV");
    // add a class name to the div
    square.className = "square_item";
    // to test
    console.log("square created!");
    // append the newly created div to the "square_container" div as its child
    document.getElementById("square_container").appendChild(square);
  }

}

// add an eventListener to the button
document.getElementById("create_square").addEventListener("click", createSquare);
