//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var apiResult = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: ['Apama']
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: ['Stratonice of Syria']
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: ['Laodice I', 'Berenice']
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: ['Laodice II']
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: []
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: ['Laodice III', 'Euboea of Chalcis']
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: []
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: ['Apama', 'Laodice V']
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Antiochus VI Dionysus',
      startReign: 145,
      endReign: 140,
      consort: []
    },
    {
      name: 'Diodotus Tryphon',
      startReign: 140,
      endReign: 138,
      consort: []
    },
    {
      name: 'Antiochus VII Sidetes',
      startReign: 138,
      endReign: 129,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 129,
      endReign: 126,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Alexander II Zabinas',
      startReign: 129,
      endReign: 123,
      consort: []
    },
    {
      name: 'Cleopatra Thea',
      startReign: 126,
      endReign: 121,
      consort: []
    },
    {
      name: 'Seleucus V Philometor',
      startReign: 126,
      endReign: 125,
      consort: []
    },
    {
      name: 'Antiochus VIII Grypus',
      startReign: 125,
      endReign: 96,
      consort: ['Tryphaena of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Antiochus IX Cyzicenus',
      startReign: 114,
      endReign: 96,
      consort: ['Cleopatra IV of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Seleucus VI Epiphanes Nicator',
      startReign: 96,
      endReign: 95,
      consort: []
    },
    {
      name: 'Antiochus X Eusebes Philopator',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Demetrius III Eucaerus',
      startReign: 95,
      endReign: 87,
      consort: []
    },
    {
      name: 'Antiochus XI Epiphanes Philadelphus',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Philip I Philadelphus',
      startReign: 95,
      endReign: 84,
      consort: []
    },
    {
      name: 'Antiochus XII Dionysus',
      startReign: 87,
      endReign: 84,
      consort: []
    },
    {
      name: 'Tigranes I of Armenia',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Seleucus VII Kybiosaktes',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Antiochus XIII Asiaticus',
      startReign: 69,
      endReign: 64,
      consort: []
    },
    {
      name: 'Philip II Philoromaeus',
      startReign: 65,
      endReign: 63,
      consort: []
    }
  ]
}


//Write a function that returns all kings with 2 consorts
function rulersWithTwoConsorts(data) {
  var output = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];
    // console.log(ruler.name, ruler.consort);
    if (ruler.consort.length == 2) {
      output.push(ruler);
    }
  }
  return output;
}
var result = rulersWithTwoConsorts(apiResult);
// console.log(result);

//Write a function that returns all kings with 0 consorts
function rulersWithNoConsorts(data) {
  var output = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

    if (ruler.consort.length == 0) {
      output.push(ruler);
    }
  }
  return output;
}
var result = rulersWithNoConsorts(apiResult);
// console.log(result);

//Once those two are complete, refactor so that they can both use the same function
function rulersConsortReturn(data, amount) {
  var output = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

    if (ruler.consort.length == amount) {
      output.push(ruler);
    }
  }
  return output;
}
// var result = rulersConsortReturn(apiResult, 2);
var result = rulersConsortReturn(apiResult, 0);
// console.log(result);

//-------------------------

//Write a function that returns the king with the longest name
function rulerLongestName(data) {
  var kingWithLongName = data.rulers[0];

  for (var i = 1; i <data.rulers.length; i++) {
    var ruler = data.rulers[i];
    if (ruler.name.length > kingWithLongName.name.length) {
      kingWithLongName = ruler;
    }
  }
  return kingWithLongName;
}
var result = rulerLongestName(apiResult);
// console.log(result);

//Write a function that takes a consorts name and returns all the kings she was consort with
function consortAndHerKings(data, consortName) {
  var output = [];

  for (var i =0; i < data.rulers.length; i++) {
    var rulers = data.rulers[i];

    for (var c=0; i < rulers.consort.length; c++) {
      if (rulers.consort[c] === consortName) {

        output.push(rulers);
      }
    }
  }
  return output;
}
var result = consortAndHerKings(apiResult, "Apama");
console.log(result);
//-------------------------

//Write a function that returns all kings with a consort whose name contains "Cleopatra"

function rulerWithConsortCleopatra(data) {
  var output = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

  for (var c = 0; c < ruler.consort.length; c++) {
    if (ruler.consort.indexOf('Cleopatra') != -1) {
      output.push(ruler);
      break;
      }
    }
  }
  return output;
}
var result =rulerWithConsortCleopatra(apiResult);
// console.log(result);


//Write a function that returns all kings with a consort whose name contains "Laodice"

function rulersWithConsortLaodice(data) {
  var output = [];

  for (var i = 0; i < data.rulers.length; i++) {
    var ruler = data.rulers[i];

    if (ruler.consort.indexOf('Laodice') != -1) {
      output.push(ruler);
    }
  }
  return output;
}
var result =rulersWithConsortLaodice(apiResult);
// console.log(result);
//Once those two are complete, refactor so that they can both use the same function

// check to see if the two above work first
