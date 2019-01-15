window.onload = function() {
  // Find out mouse position
  // Set background color based on returned values
  var tempX = 0;
  var tempY = 0;
  // get body element
  var body = document.getElementsByTagName("body");


  function getMouseXY(e) {
    tempX = e.pageX;
    tempY = e.pageY;


    if (tempX < 0){tempX = 0;}
    if (tempY < 0){tempY = 0;}

    // Scale mouseposition to rgb value range
    tempX = Math.floor(scale(tempX, 0, window.innerWidth, 0, 255));
    tempY = Math.floor(scale(tempY, 0, window.innerHeight, 0, 255));


    // change background style of body element
    // body[0].style.backgroundColor = "rgb(2, 2, 2)";
    // body[0].style.backgroundColor = "rgb(" + tempX + ", " + tempY + ", 50)";
    body[0].style.backgroundColor = `rgb(${tempX}, ${tempY}, 50)`;


    console.log("X coordinate: " + tempX);
    console.log("Y coordinate: " + tempY);
    //console.log(body);

    return true;
  }

  // Map one range of numbers to another range or numbers
  function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  // Find out scroll position
  // Text page element
  // Change font-size of page element based on scroll position

  function changeFontSize(e) {
    var scrollPos = window.scrollY;
    var header = document.getElementsByTagName("h1");
    header[0].style.fontSize = `${scrollPos}px`;
  }

  function addHeader() {
    // create the header element
    var node = document.createElement("h1");
    // create the text for the header element
    var nodeText = document.createTextNode("Rabbits");
    // put the text in the header element
    node.appendChild(nodeText);
    body[0].appendChild(node);
    // Add event listener to addHeader
    node.addEventListener("click", addParagraph);
  }

  // find out if mouse is clicked
  // find out if mouse is clicked on header
  // if mouse is clicked then add a new html element to page

  function addParagraph() {
    // create a paragraph element
    var para = document.createElement("p");
    // create text for paragraph element
    var paraText = document.createTextNode("Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds[1] of domestic rabbit. Sylvilagus includes thirteen wild rabbit species, among them the seven types of cottontail. The European rabbit, which has been introduced on every continent except Antarctica, is familiar throughout the world as a wild prey animal and as a domesticated form of livestock and pet. With its widespread effect on ecologies and cultures, the rabbit (or bunny) is, in many areas of the world, a part of daily life—as food, clothing, a companion, and as a source of artistic inspiration.");
    // append text node to html node
    para.appendChild(paraText);
    // append para node to html body
    body[0].appendChild(para);
  }

  // Track the movement of the mouse on the document object and
  document.addEventListener("mousemove", getMouseXY);
  // Track scroll position on page
  document.addEventListener("scroll", changeFontSize);

  addHeader();

}
