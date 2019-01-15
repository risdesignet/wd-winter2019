// Find out mouse position
// Set background color based on returned values
var tempX = 0;
var tempY = 0;


function getMouseXY(e) {
  tempX = e.pageX;
  tempY = e.pageY;


  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}

  // Scale mouseposition to rgb value range
  tempX = Math.floor(scale(tempX, 0, window.innerWidth, 0, 255));
  tempY = Math.floor(scale(tempY, 0, window.innerHeight, 0, 255));

  // get body element
  var body = document.getElementsByTagName("body");
  // change background style of body element
  // body[0].style.backgroundColor = "rgb(2, 2, 2)";
  // body[0].style.backgroundColor = "rgb(" + tempX + ", " + tempY + ", 50)";
  body[0].style.backgroundColor = `rgb(${tempX}, ${tempY}, 50)`;


  console.log("X coordinate: " + tempX);
  console.log("Y coordinate: " + tempY);
  //console.log(body);

  return true;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }

document.addEventListener("mousemove", getMouseXY);
