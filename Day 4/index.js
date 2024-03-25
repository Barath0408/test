var obj1 = { name: "personal1", age: 5 };
var obj2 = { age: 5, name: "personal2" };

function areObjectequal(obj1, obj2) {
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(areObjectequal(obj1, obj2));

var xhr = new XMLHttpRequest(); //CREAT A OBJECT

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
  //console.log("XMLHttpRequest- status", xhr.status);
  var countries = JSON.parse(xhr.responseText);
  console.log(countries);
  //  countries.forEach((countries) => {
  //  console.log(countries.name.common + ":" + countries.flag + ":" + countries.region.subregion+":"+ countries.populations);
  // });
  for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].name.common + ":" + countries[i].flag);
    console.log("populations:", countries[i].population);
    console.log("regions:", countries[i].region);
    console.log("subregion:", countries[i].subregion);
  }
};
xhr.send();
