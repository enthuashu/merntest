// whenever we have big code structure then we separate codes into different small files
// whenver we need those files, we need to export them from that file and import in the big file

const { component1, component3, component4 } = require("./small");
const component2 = require("./small2");
const array1 = require("./countrydata");
component1();
component3();
component4();
component2();
console.log(array1);
