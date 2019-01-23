$( document ).ready(function() {
  var body =  document.querySelector("body");
  // Objectify Myself
  // firstname
  // lastname
  // age
  // Major/Discipline
  // Places you've lived
  // method to create fullname
  // Have you seen the movie bird box
  // physicaly features: height, hair color, eye color, tattoos?, piercings?

  var bobbyjoe = {
    firstName: "Bobby Joe",
    lastName: "Smith III",
    age: 31,
    major: ["Graphic Design", "Photo"],
    places: [
      {state: "Minnesota", city: ["St.Paul", "Minneapolis"]},
      {state: "Maryland", city: "Baltimore"},
      {state: "Rhode Island", city: "Providence"}
    ],
    features: {
      height: "5'11",
      hairColor: "black",
      eyeColor: "beautiful brown",
      tattoos: false,
      piercings: true
    },
    seenBirdbox: false,
    fullName: function() {
      console.log(this.firstName + " " + this.lastName);
    }

  }

  console.log(bobbyjoe.firstname);
  bobbyjoe.fullName();

  // append data to DOM
  // get body node from html
  // create child node
  function addInfo () {
    $("section").append(`<p>${bobbyjoe.firstName}</p>`);
  }


  function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  function doThings() {
    // onclick of paragraph tag add info to alert tag
    // toggle typeface on double click
    // change typecolor of typeface based on mouse position
    $("p").dblclick(function() {
      //$(this).css("font-family","helvetica");
      $(this).toggleClass("helvetica");
    });
    // get mouse coordinates
    // use mouse coordinates to change rgb color
    $( document ).on( "mousemove", function( event ) {
      var mouseX = event.pageX;
      var mouseY = event.pageY;
      var modX;
      var modY;
      modX = Math.floor(scale(mouseX, 0, $(window).width(), 0, 255));
      modY = Math.floor(scale(mouseY, 0, $(window).height(), 0, 255));
      console.log(modY);
      $("p").css("color", `rgb(${modX}, ${modY}, ${Math.floor(modX + modY/2)})`);
    });
    $(document).keypress(function( event ) {
      if(event.which == 13) {
        alert("Bobby Joe is " + bobbyjoe.age + " years old.");
      }
    })
  }
  addInfo();
  doThings();
});
