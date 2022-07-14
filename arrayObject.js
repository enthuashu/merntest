//declaring array
let arr = ["value 1", "value 2", "value 3", "value 4"];

//priting array
console.log(arr);

//priting array length
console.log(arr.length);

//accesinng array element
console.log(arr[1]);

//changing value of particular index;
arr[2] = "changed value";
console.log(arr);

//printing all elements of array;
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// adding element to array
arr.push("value 5");
console.log(arr);
arr.push("value 6");
console.log(arr);

// // removing last element
arr.pop();
console.log(arr);

// map;
arr.map((v) => console.log("addded", v));

const ages = [32, 33, 16, 40];

// deleting array element
const resultsOfFilter = ages.filter((v) => {
  return v != 33; // condition to filter
});

console.log(resultsOfFilter);
