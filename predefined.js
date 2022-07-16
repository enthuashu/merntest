// functions are of two types
// 1. User defined => Defined by user
// 2. Pre defined => already defined in complier

//ex 1=> setinterval function

// setInterval("jo kam krana h","kitne time interval pr karana h")

//function runs after every interval
setInterval(() => {
  console.log("Hey there");
}, 5000);

//function run once when time is out
setTimeout(() => {
  console.log("Time out");
}, 5000);
