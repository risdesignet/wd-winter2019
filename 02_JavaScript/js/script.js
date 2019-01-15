// Find out mouse position
// Set background color based on returned values
var tempX = 0;
var tempY = 0;


function getMouseXY(e) {
  tempX = e.pageX;
  tempY = e.pageY;


  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}

  console.log("X coordinate: " + tempX);
  console.log("Y coordinate: " + tempY);

  return true;
}

document.addEventListener("mousemove", getMouseXY);
