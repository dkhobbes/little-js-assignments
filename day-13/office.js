var fs = require('fs');


fs.readFile('Import_User_Sample_en.csv', 'utf-8', function(err,data){
  var parsed = {
    UserNames = []

  }
}

var lines = data.split("\n");
for (var = 1; i < lines.length; i++){
  var indivArr = lines[i].split(",");

  var userData = {
    UserName: indivArr[0],
    DisplayName = [3]
    }
  }
  parsed.UserNames.push(userData)

}

console.log(parsed.UserNames);
});
