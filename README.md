# JsAlgoDsByHarshitChhipa
  - Queue
  - Stack
  - Linked List

# Random

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
