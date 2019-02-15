var students = [
  {"firstname": "Carl-Gustaf", "lastname": "Ewerbring", "section": 1, "path" : "/cargustaf_ewerbring/index.html"},
  {"firstname": "Hannah", "lastname": "Gensaw", "section": 1, "path" : "/hannah_gensaw/index.html"},
  {"firstname": "Rebeca", "lastname": "Gonzalez Morales", "section": 1, "path" : "/rebeca_gonzalez/index.html"},
  {"firstname": "Yoon", "lastname": "Kim", "section": 1, "path" : "/yoonsu_kim/index.html"},
  {"firstname": "Travis", "lastname": "Morehead", "section": 1, "path" : "/travis_morehead/index.html"},
  {"firstname": "Georgie", "lastname": "Nolan", "section": 1, "path" : "/georgie_nolan/index.html"},
  {"firstname": "Jiyeon", "lastname": "Park", "section": 1, "path" : "/jiyeon_park/index.html"},
  {"firstname": "Hanbing", "lastname": "Ren", "section": 1, "path" : "/hanbing_ren/index.html"},
  {"firstname": "Dingwen", "lastname": "Sun", "section": 1, "path" : "/dingwen_sun/index.html"},
  {"firstname": "Maddie", "lastname": "Woods", "section": 1, "path" : "/maddie_woods/index.html"},
  {"firstname": "Tianyang", "lastname": "Wu", "section": 1, "path" : "/tianyang_wu/index.html"},
  {"firstname": "Weixi", "lastname": "Zeng", "section": 1, "path" : "/weixi_zeng/index.html"},
  {"firstname": "Jason", "lastname": "Hebert", "section": 1, "path" : "/jason_hebert/index.html"},
  {"firstname": "Mia", "lastname": "Santomauro", "section": 1, "path" : "/mia_santomauro/index.html"},
  {"firstname": "Shweta", "lastname": "Majumder", "section": 1, "path" : "/mia_santomauro/index.html"},
  {"firstname": "Tanzina", "lastname": "Chowdhury", "section": 1, "path" : "/tanzina_chowdhury/index.html"},
  {"firstname": "Kanika", "lastname": "Kumar", "section": 1, "path" : "/kanika_kumar/index.html"},
  {"firstname": "Bilal Ismail", "lastname": "Ahmed", "section": 2, "path" : "/bilalismail_ahmed/index.html"},
  {"firstname": "Regan", "lastname": "Cai", "section": 2, "path" : "/regan_cai/index.html"},
  {"firstname": "Ji", "lastname": "Choi", "section": 2, "path" : "/ji_choi/index.html"},
  {"firstname": "Jessica", "lastname": "Hsiao", "section": 2, "path" : "/jessica_hsiao/index.html"},
  {"firstname": "Jenny", "lastname": "Wang", "section": 2, "path" : "/jenny_wang/index.html"},
  {"firstname": "Amy", "lastname": "Huang", "section": 2, "path" : "/amy_huang/index.html"},
  {"firstname": "Juhyeon", "lastname": "Kim", "section": 2, "path" : "/juhyeon_park/index.html"},
  {"firstname": "Olivia", "lastname": "Kim", "section": 2, "path" : "/olivia_kim/index.html"},
  {"firstname": "Vidur", "lastname": "Madhav", "section": 2, "path" : "/vidur_madhav/index.html"},
  {"firstname": "Caroline", "lastname": "Smith", "section": 2, "path" : "/Caroline_Smith/index.html"},
  {"firstname": "Natvipa", "lastname": "Tejapaibul", "section": 2, "path" : "/natvipa_tejapaibul/index.html"},
  {"firstname": "Sophia", "lastname": "Tseng", "section": 2, "path" : "/sophia_tseng/index.html"},
  {"firstname": "Ben", "lastname": "Wainmann", "section": 2, "path" : "/ben_wainmann/index.html"},
  {"firstname": "Yi", "lastname": "Wu", "section": 2, "path" : "/yi_wu/index.html"},
  {"firstname": "Jim", "lastname": "Xu", "section": 2, "path" : "/jim_xu/index.html"},
  {"firstname": "Yang", "lastname": "Zhao", "section": 2, "path" : "/yang_zhao/index.html"}
]

// Make the image draggable and give it the hand grabbing cursor when dragging
$("img").draggable();


function addStudents() {
  // Loop through array of students to append each one to the DOM
  for (var i = 0; i < students.length; i++) {
    // Construct html element
    // Using `` with ${} lets you insert javascript variables into a string
    var element = `<a href="${students[i].path}" target="_blank">${students[i].firstname} ${students[i].lastname}</a>`;
    // Add as a child to the body element
    $(".page-wrapper").append(element);
    // Add a divider after each name unless it's the lastname in the array
    if ( i < students.length - 1) {
      // Add a divider to DOM
      // &rarr is unicode for the right arrow symbol
      $(".page-wrapper").append("<span> &rarr; </span>");
    }
  }
}

// call addStudents() function to make it run
addStudents();
