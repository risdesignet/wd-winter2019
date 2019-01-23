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
    },
    printContents: function(key) {
      var pNode = document.createElement("p");
      k = this.key;
      var pText = document.createTextNode(`${k}: ${k}`);
      pNode.appendChild(pText);
      body.appendChild(pNode);
    }
  }

  console.log(bobbyjoe.firstname);
  bobbyjoe.fullName();

  // append data to DOM
  // get body node from html
  // create child node
  function addInfo () {
    // var pNode = document.createElement("p");
    // var pText = document.createTextNode(`First Name: ${bobbyjoe.firstName}`);
    // pNode.appendChild(pText);
    // body.appendChild(pNode);
    for (var key in bobbyjoe) {
      var pNode = document.createElement("p");
      console.log(bobbyjoe[key]);
      var pText = document.createTextNode(`${key}: ${bobbyjoe[key]}`);
    }
  }

  addInfo();

  function appendInfo(object, value) {
    var pNode = document.createElement("p");
    key = Object.keys(object).find(key => object[key] === value);
    var pText = document.createTextNode(`${key}: ${value}`);
    pNode.appendChild(pText);
    body.appendChild(pNode);
  }

  appendInfo(bobbyjoe, bobbyjoe.firstName);
  bobbyjoe.printContents(lastName);
}
