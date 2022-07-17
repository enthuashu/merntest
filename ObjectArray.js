const arr1 = ["value1", "value 2", "value 3"]; //this is an array of strings
const arr2 = [1, 2, 3]; //this is an array of numbers
const obj = {
  name: "ashu",
  age: "21",
  city: "gkp",
};

// Array of an object
// Array of an object is an array which contains its values as objects
const arrayObject = [
  {
    name: "ashu",
    age: "21",
    city: "gkp",
  },
  {
    name: "ashu1",
    age: "21",
    city: "gkpp",
  },
  {
    name: "ashu2",
    age: "21",
    city: "gkp",
  },
  {
    name: "ashu4",
    age: "21",
    city: "gkp",
  },
];

console.log(arrayObject[0].name);
console.log(arrayObject[0].city);
console.log(arrayObject[0].age);
