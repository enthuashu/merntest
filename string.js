// getting length;
let str = "My name is ashutosh";
let length = str.length;
console.log(length);

// getting character at given position
console.log(str[3]);

// converting string to toLowerCase/uppercase
let lowerstr = str.toUpperCase();
console.log(lowerstr);

//replacing character in string
let replacedstring = str.replace("ashutosh", "newname");
console.log(replacedstring);

// adding string
let addedstr = str + "added str";
console.log(addedstr);

// slicing string
let sliced = str.slice(0, 9);
console.log(sliced);

// searching string
let searchedvalue = str.search("name");
console.log(searchedvalue);

//trimming
let bigstring = "      ashu   #   ";
let trimmedstring = bigstring.trim();
console.log(trimmedstring);

//splitting
let newstr = "picture.png";
let splittedstring = newstr.split(".");

console.log(splittedstring[0]);
console.log(splittedstring[1]);
