const lodash = require("lodash");

const array = ["miqdad" , "ali" , "akash"];

// Using normal map
console.log(array.map((name)=>{
    return name.charAt(0).toUpperCase() + name.slice(1,);
}))

// Using Lodash
const newArray = lodash.map(array , lodash.capitalize);
console.log(newArray);