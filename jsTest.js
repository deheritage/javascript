let person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };

  const arrayList = [1,2,3,4,5];

  for (let index = 0; index < arrayList.length; index++) {
      const element = arrayList[index];
      console.log(element);
  }
  
  console.log(person.firstName + " " + person.lastName);

let num 
  a = 5;
  b = 6;
  c = a + b;

  console.log(c);


  let car = {type:"Fiat",  model:"500", color:"white"};
  
  console.log(car = "Fiat");

  let cars = ["Saab", "Volvo", "BMW"];
  console.log(cars = 3);
 

  let x1 = "";
let x2 = 0;
let x3 = false;
const x4 = {};
const x5 = [];
const x6 = /()/;
const x7 = function(){};


console.log("x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>");