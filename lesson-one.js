"use strict";
// TYPESCRIPT LESSON
// let firstName = 'Devin';
// console.log(firstName.toUpperCase());
// console.log(firstName.length);
// console.log(firstName);
// let guess;
// guess = 'green';
// guess = 2;
// let phoneNumber : string;
// if (Math.random() > 0.5) {
//   phoneNumber = '+61770102062';
// } else {
//   phoneNumber = '7167762323';
// }
// let band : string;
// band = 'Hop Along'
// console.log(band)
// band = 'Actually Im a Ghost'
// console.log(band)
// function triple(value : number) {
//     return value * 3;
//   }
//   function greetTripled(greeting : string, value : number) {
//     console.log(`${greeting}, ${triple(value)}!`);
//   }
//   greetTripled('Hiya', 5);
// function proclaim(status?: string) {
//     console.log(`I'm ${status || 'not ready...'}`);
//   }
//   proclaim();
//   proclaim('ready?');
//   proclaim('ready!');
function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
proclaim();
proclaim('ready?');
proclaim('ready!', 3);
