# JsAlgoDsByHarshitChhipa
  - Queue
  - Stack
  - Linked List

# Random
```
// const conditionsObject = {
// //   condition: "and",
// //   rules: [
// //     {
// //       field: "age",
// //       operator: "<="
// //     },
// //     {
// //       condition: "or",
// //       rules: [
// //         {
// //           field: "gender",
// //           operator: "="
// //         }
// //       ]
// //     }
// //   ]
// // };

// // function changeConditionvalueWithDash(conditions) {
// //   if (Array.isArray(conditions)) {
// //     conditions.forEach(condition => {
// //       if(condition && condition['condition']){
// //         condition['condition'] = '-';
// //       }
// //     });
// //   } else {
// //     for (let condition in conditions) {
// //       if (condition === "condition") {
// //         conditions[condition] = "-";
// //       } else if (Array.isArray(conditions[condition])) {
// //         // console.log(conditions[condition]);
// //         changeConditionvalueWithDash(conditions[condition]);
// //       }
// //     }
// //   }
// //   console.log(conditions)
// // }

// // changeConditionvalueWithDash(conditionsObject);

// // const jsDiff = (a, b, c) => a - b - c;

// // const jsDiffCurried = a => b => b ? jsDiffCurried(a - b) : a;

// // console.log(jsDiffCurried(4)(1)(2)());

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Output = [12, 14, 16, 18, 20]

// // Input2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// // Output2 = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

// // Input3 = [21,22,23,24,25,26,27,28,29,30]
// // Output3 = [32, 34, 36, 38, 40]
// let outputArray = [];
// const lengthOfArray = input.length;
// const lastElementOfArray = input[lengthOfArray - 1];
// outputArray = input.filter((number => {
//   // console.log(number % 2);
//   if (number % 2 === 0) {
//     console.log(number);
//     number = number + 10;
//     return number;
//   }
// });
// console.log(outputArray);

const getDoubleOfNumber = function(number) {console.log('inside function'); return 2*number;}
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    if(!!cache[args[0]]) {
      return cache[args[0]];
    } else {
      cache[args[0]] = getDoubleOfNumber(args[0]);
      return cache[args[0]];
    }
  }
};
const memoizedGetDoubleOfNumber = memoize(getDoubleOfNumber);
console.log(memoizedGetDoubleOfNumber(3))     //=> this function should print the console statememnt and return result as 6
console.log(memoizedGetDoubleOfNumber(3))     //=> this time, only the result should be returned as 6


































// const sortByLength = (stringArray) => {
//   return stringArray.sort((a,b) => a.length - b.length);
// }

// sortByLength(['You', 'are', 'an', 'amazing', 'engineer']);



// ['You', 'are', 'an', 'amazing', 'engineer'].sort((a, b) => a.length - b.length || a.localeCompare(b));



// function getInterpolatedString(string,objectToReplace) {
// for(let key in objectToReplace) {
//   const keyToReplace = `{{${key}}}`
//   string = string.replace(keyToReplace,objectToReplace[key]);
// }
// return string;
// }
// getInterpolatedString('Hi {{name}} from {{company}}', {name: 'Nitish', company: 'Wingify'})












// // function nextPalindrom(number) {
// // if(typeof number == 'number'){
// //   number = number.toString();
// // }
// // let splittedArray = number.split('');
// // // Case 1 when all the numbers are like 9
// // if(isAll9(splittedArray)){
// //   console.log(+number + 2);
// // } else {
// //   findNextPalindrom(splittedArray);
// //   }
// // }

// //  function isAll9(array) {
// //  for(let i = array.length-1; i >= 0 ; i--){
// //    return array[i] != 9 ? false : true;
// //  }
// // }

// // function findNextPalindrom(array){
  
// // }

// // let nextPalindromIs = nextPalindrom(9999999)

// function getAbsoluteUrl(x) {
// if(arguments.length === 1 || !arguments[1]) {
//  return arguments[0];
//  } else {
//    if(arguments[1].includes('../')){
//      return arguments[0] + arguments[1].split('../')[1];
//    } else if(arguments[1].includes('//')) {
//      return arguments[0] + arguments[1].split('//')[1];
//    } else {
//      return arguments[0] + arguments[1];
//    }
//  }
// }


// // getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', '../test')
// console.log(getAbsoluteUrl('https://vwo.com?q=hello'));   //=> https://vwo.com/?q=hello"
// console.log(getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', 'test'));      //=> https://vwo.com/ecommerce-ab-testing/test
// console.log(getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', '../test'))   //=> https://vwo.com/test
// console.log(getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', '//google.com'))   //=> https://google.com
// // getAbsoluteUrl(document.baseURI, 'test')    //=> https://vwo.com/test (Assuming you are running this function on https://vwo.com)
```
