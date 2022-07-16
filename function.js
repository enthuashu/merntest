// function functionname

// function declaration
function manager1() {
  console.log("The attendence of today is", 345);
}

function manager2() {
  console.log("Cleanliss has been done ");
}

function manager3() {
  console.log("New Employyes are hired");
}

function manager4(nameofemployee, test2) {
  console.log("Report of Employee", nameofemployee, test2);
}

// boss calling for attendence
console.log("Boss calling for attendence");
manager1(); // function call

console.log("Boss calling for cleanliness");
manager2(); // function call

console.log("Boss calling for hiring");
manager3(); // function call

console.log("Boss calling for employee data");
manager4("Ashutosh", "hfjlahfljahfd"); // function call
manager4("Satyam", "hshdks"); // function call
manager4("Msihra"); // function call
manager4("test"); // function call
manager4("test 2"); // function call

// function which return something is needed to be stored somethere when function is called
function sum(a, b) {
  return a + b;
}

function totalsum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}
let ans = sum(4, 5);
console.log(ans);

let ans2 = sum(100, 5);
console.log(ans2);

let totalsumvalue = totalsum(1, 2, 3, 4, 5, 6);
console.log(totalsumvalue);

// No argument based function ===> no argument is sent when function is called

// Argument based function ==> function takes arguments when it is called

// return type functions => these functions return some values which are needed to be stored somethere to use it
