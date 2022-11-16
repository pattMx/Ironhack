// console.log("------------------");
// console.log("Ejercicio 01 - Arrow function con switch");

// console.log("");

// console.log("FOR LOOP - simple");

// const forLoopExample = 10;

// for (let i = 1; i <= forLoopExample; i++){
//     console.log("JS is legit -FOR LOOP");
// }

// console.log("------------------------");
// console.log("FOR LOOP - ARRAY Example - Fav Cities:");

// const cities = ["BArcelona", "Tokyo", "Berlin", "Helsinki"]

// for (let i = 0; i < cities.length; i++) {
//     console.log(`. ${cities[i]}`);
// }

// console.log("------------------");
// console.log("FOOR - LOOP - ARRAY MIXTO");

// const mixedArray = [6, 12, "miami", 1, true, "BArcelona", "200", "Helsinki", 8, 88];

// function sum(arrayProperty) {
//     let mixedSum = 0;
//     for (let i = 0; i < arrayProperty.length; i++) {
//         if (typeof arrayProperty[i] === "string") {
//             str = arrayProperty[i].split("");
//             for (let i = 0; i < str.length; i++) {
//                 mixedSum += str[i].length;
//             }
//         } else if (arrayProperty[i] === true) {
//         } else {
//             mixedSum += arrayProperty[i];
//         }
//     }
//     return mixedSum;
// }

// console.log("Sum of a mixed Array");
// console.log(sum(mixedArray));

// console.log("----------------------------");
// console.log("FOOR LOOP - ARRAY DE OBJETOS - CASO REAL");

// const data = [
//     { name: "patricia", age: 27, group: "A" },
//     { name: "patricia", age: 27, group: "A" },
//     { name: "patricia", age: 27, group: "A" },
// ];

// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
    
// }

// console.log("----------------------------");

// console.log("WHILE LOOP - Simple");

// // const whileLoopExample = 10;
// // while (whileLoopExample >= 10) {
// //     console.log("JS is legit - While LOOP");
    
// // }

// const whileLoopArrayExample = ["BArcelona", "Tokyo", "Berlin", "Helsinki"]

// let lengthOfWhileArrayExample = whileLoopArrayExample.length;

// let count = 0;

// while (lengthOfWhileArrayExample--) {
//     console.log(`${whileLoopArrayExample[count]}`);
//     count++;
//     }

// let i = 1;
// let n = 5;

// while (i <= n) {
//     console.log(`. ${i}`);

// }

// let count2 = 0;

// while (lengthOfWhileArrayExample--) {
//     console.log(`. ${whileLoopArrayExample[count2].name}`);
//     count2++;
//     }


// let Array = [27, "patricia", true];
// for (let i = 0; i < Array.length; i++){
//     console.log(typeof(Array[i]));
// }


const FamousPerson = [
    "katty Perry", "Ariana Grande", "Dwayne Johnson", "Cristiano Ronaldo", "Kim Kardashian"
]

for (let i = 0; i < FamousPerson.length; i++) {
    console.log(`${FamousPerson[i]}`);
}

