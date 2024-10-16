//Array.prototype.Reduce
//arr.reduce(callback (accumulator, currentValue, [, index[, array]] )[,initialValue])

//The salad chopper of js
//takes an array and turns it into 1 new thing
//take an array and reduces it into just one number : sum, average, count, total of all the string lengths. 
//take an array and reduce it into another array: do filter or map or anything like that
//take in an array and reduce it into a concatenated string : a bunch of names into a stringwith all of them. 
//Take a bunch of characters into one string. An array of objects of pizzas places into a string of pizza places who are similiar. 
//take an array and put every value into one new object. 
// is a bit different that map and forEach 



// reduce call back  

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

//accumulator is the salad we are trying to make 

const nums = [5, 10,15,20,25,30];

// nums.reduce((accumulator, value, index, array) =>{
//   console.log('accumulator', accumulator);
//   console.log(' ');
//   console.log('value', value);
//   console.log('index', index);
//   console.log('array', array);
// });

// nums.reduce((accumulator, value, index, array) =>{
// console.log('acc', accumulator, 'val', value, 'index', index, 'array', array);
// });

// const characters = ['a', 'c', 'c', 'u', 'm', 'u', 'l', 'a', 't', 'o', 'r'];

// characters.reduce((accumulator, value)=> {
//   console.log(accumulator, value);
//   return accumulator + value;
// });

// console.log(
//   characters.reduce((accumulator, value)=> {
 
//   return accumulator + value;
// }));

// nums.reduce((acc, value) =>{
//   console.log(acc, value);
//   return acc + value;
// });

// nums.reduce((acc, value) =>{
//   console.log(acc, value);
//   return acc + value;
// }, 100000);


// nums.reduce(makeABigNum);

// function makeABigNum(acc, value){
//   console.log(acc, value);
//   return acc + value;
// }


//reduce takes in a call back function. 


// with an array of [3,6,9,12].reduce(callback);

// the callback(3,6) =>  9 then 
// the callback(9,9) => 18 then 
// the callback(18, 12) => 30 



// another option we can call instead with a call back with a number say a 100 

// - the end result instead of starting at 0 and 1 . 
// - it will pass in the second argument.

// the callback(100,3) =>  103 then 
// the callback(103,6) =>  109 then 
// the callback(109, 9) => 118 then 
// the callback(118, 12) => 130 is the final return.

// To do for array
//lets do something like a map()
//take in the numbers and multiply times 2


// nums.reduce(putItInArrayTimesTwo, []);

// function putItInArrayTimesTwo(accArray, valueNumber){
//   console.log(accArray, valueNumber);
//   accArray.push(valueNumber *2);
//   return accArray;
// }




///////////////
const students = ['Bart', 'Encinoman', 'Spicoli', 'BudAndDoyle'];



function makeGradeObject(accObj, valuePerson){
  accObj[valuePerson] = '100%';
  return accObj;
}

// students.reduce(makeGradeObject, {});
///////////////

// console.log(students.reduce(makeGradeObject, {}));


const students2 = [{name: 'Bart'}, {name:'Encinoman'}, {name:'Spicoli'}, {name:'BudAndDoyle'}];


function makeGradeObject2(accObj, valuePerson){
  accObj[valuePerson.name] = valuePerson.name.length * 700 / 100;
  return accObj;
}
students2.reduce(makeGradeObject2, {});


console.log(students2.reduce(makeGradeObject2, {}));

// write code easier while its easy to read, everything that can be done with a reduce can be done with fro loop