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