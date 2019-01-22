window.onload = function(e){
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
    var pNode = document.createElement("p");
    var pText = document.createTextNode(`First Name: ${bobbyjoe.firstName}`);
    pNode.appendChild(pText);
    body.appendChild(pNode);
  }

  addInfo();
}