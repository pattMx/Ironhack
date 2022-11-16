// console.log(8);
// console.log(8.5);
// // nan === not a number
// let f = "hello"
// console.log(8 / f);

// // strings
// console.log('patricia');
// console.log("784");

// // Boolean dato relacionado a verdad, probabilidad

// console.log(true);
// console.log(false);

// // null

// console.log(null)

// undefined
// let paty = undefined

// console.log(typeof paty);

// let barcelona = Symbol("borne")
// console.log(typeof barcelona);
// console.log(Symbol("borne") === Symbol("borne"));

// console.log("this is table paty");
// console.table([
//     "green day",
//     "Arctic Monkeys",
//     "Post Malone",
//     "Rihanna",
//     "Muse",

// ]);

// console.log("this is table paty");
// console.log("Mix of primitive datatypes");
// console.table([
//     "green day",
//     5,
//     "Rihanna",
//     false,
//     "muse",
//     undefined,
// ]);

// objetos
// ejemplo syntax initialization = {}
// ejemplo syntax context = { key: "value"}

// console.log("my bio");
// console.table({
//     firstNAme: "Patricia",
//     lastName: "Sanchez",
//     ocuppation: "Student",
//     hobbies: ["music", "guitar playing", "piano", "surfing", "Cycling"],
    
//     skills: {
//         surfing: "Excellent",
//         skiing: 0,
//         guitar: ["Acoustic", "electronic"],
//         instruments: {
//             percussion: ["Drums", "Toms", "Snares", "Cymbal"],
//             string: [ "guitar", "Bass", "cuatro"],
//         }
//     }
// });

// // ejemplo 2, array de objetos

// console.table([
//     {
//         movie: "The devil Wears Prada",
//         genero: ["comedia", "Drama"],
//         director: ["David Frankel"],
//         location: ""
//     },
//     {
//         movie: "El viaje de chihiro",
//         genero: ["fantasia", "aventura"],
//         director: ["Hayao Miyazaki"],
//         location: "Japon"
//         actors: ["Rumi Hiiragi", "Miyu Irino"]
//         year: 2021,
//     },
//     {
//         movie: "Jhon wick",
//         genero: ["accion"],
//         director: ["Chad Stahelski"],
//         location: "Estados Unidos",
//         actors: ["Keanu Reeves", "Mikael Nyqvist", "Alfie Allen"]
//         year: 2014,
//     }
// ])



// let firstHM = 
//     {
//         firstNAme: "Patricia",
//         lastName: "Sanchez",
//         citiesILivedIn: ["Monterrey", "Puebla", "Poza Rica de Hidalgo", "Papantla de Olarte", "Sabadell"],
//         age: 27,
//     DoB: "07/07/1995",
//     drinkalcohol: false,
// }
    
// console.log("user drinks alchohol:" + `${firstHM.drinkalcohol}`);

let secondHM = [
    {
        bookName: "el hombre mas rico de Babilonia",
        genre: [" autoyuda"],
        author: "George Samuel Clason",
        year: 1926,
        isbn: 9783756523412,
    },
    {
        bookName: "EL toque de midas",
        genre: ["Educacion financiera"],
        author: "Robert T. Kiyosaki ",
        year: 2015,
        isbn: 6073131739,
    },
    {
        bookName: "Game of thrones",
        genre: ["Novela", "Fantasia", "fisccion"],
        author: "George R. R, Martin",
        year: 1996,
        isbn: 9783030250416,
    },
];

console.log(`My favorite Book is  ${secondHM[0].bookName}`);

