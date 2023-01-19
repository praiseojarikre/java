// Javascript-
// It is an OOP-Object oriented programme.
// console is a testing tool for developer.
// Variables are storage facilities
// values are piece of data
// Declarations are used to call out variables.(Var,let, const)
// Var-has the ability to redeclare reassign and declare
// let-declare and reassign
// CONST-declare- constraints in variable naming.
// variable names can only contain letters numbers, underscore,dollarsign but cant start with a number.
// dont give spaces,use carmel case,
// reserved names cnt be used as a variable name,since its reserved.
// please when naming variables,use meaningful names.
// Data types 
// 1.strings-are used for holding text/alphabets('')
// 2.Numbers- used for holding numeric numbers
// 3.Booleen-are used for optional statements TRUE/FALSE
// 4.Null- doesnt hold a value set by the programmer.
// 5.Undefined-usually set by the systems,
// 6.object-arrays,dates functions etc
// 7.symbols
// 8.BigInt
//  Data-types
// 1.Primitive data type-hold only one value.
// 2.Non Primitive data tyepe-holds more than one value like objects eg arrays,dates.

"use strict"



let age = 100
console.log(age);
let name = 'praise';
console.log(name);
var country = 'nigeria';
console.log(country);
var tribe = 'yoruba';
const PIE =3.142;
console.log(PIE);
let firstName = 'abiodun'
let lastName = 'hafeez'
let fullname = firstName + lastName
console.log(fullname);
let email = "praiseojarikre@gmail.com"
console.log(email);
// lenght property
let emaillength = email.length
console.log(emaillength); 
// getting positions
let city = 'surulere'
console.log(city[2]);
// string methods
let trainee = 'ibrahim'
console.log(trainee);
// to uppercase
let traineeUppercase = trainee.toUpperCase()
console.log(traineeUppercase);
// to lowercase
let newTrainee = 'TAYE'
console.log(newTrainee);
let newTraineelowercase = newTrainee.toLowerCase()
console.log( newTraineelowercase);
// indexof()
let newEmail = 'techstudio@gmail.com';
console.log(newEmail);
let newEmailIndex = newEmail.indexOf('t')
// lastindex() 
let applicant = 'saror';
console.log(applicant);
let lastIndexOfApplicant = applicant.lastIndexOf('r')
console.log(lastIndexOfApplicant)
// slice 
let religion = 'christianity'
console.log(religion);
let sliceReligion = religion.slice(0.6)
console.log(sliceReligion);

// replace() 
let profession = 'developer';
console.log(profession);
let replaceProfession = profession.replace('d','z')
console.log(replaceProfession)

// exercise
let Animal = 'hipopotamus'
console.log(Animal);

let AnimalUppercase = Animal.toUpperCase()
console.log(AnimalUppercase);

let Animallowercase = Animal.toLowerCase()
console.log( Animallowercase);

let animal = 'hipopotamus'
console.log(animal[6]);

let lastAnimal = animal.lastIndexOf('o')
console.log(lastAnimal);

let sliceAnimal = Animal.slice (4,7)
console.log(sliceAnimal);

let replaceAnimal = Animal.replace ('h','b')
console.log(replaceAnimal);

// ======================================================
// 17 jan 2023 NUMBERS
// ======================================================
let year = 2023;
console.log(year);
let score = 100;
console.log(score);
let score2 = 20;
console.log(score2);

// Math operators +,=,-,*,**,%
let finalscore = score + score2;
console.log(finalscore);

let minus = score - score2;
console.log(minus);

let multiply = score * score2;
console.log(multiply);

let div = score2 / score;
console.log(div);

let raisedtopower = 2 ** 2;
console.log(raisedtopower);

let num = 10;
console.log(num);

let num2 =3 
console.log(num2);

let indices = num ** num2;
console.log(indices);

let modulus = num % num2
console.log(modulus);

// decremental and incremental
let realYear = 2020

realYear++
console.log(realYear);

realYear--
console.log(realYear);

let Numb = 20;
Numb += 2;
console.log(Numb);

let continent = 'Africa'
console.log(continent);
 
let language = 'Pidgin English'
console.log(language);

let ghanaPopulation = 500;
console.log(ghanaPopulation);

let finlandPopulation = 800;
console.log(finlandPopulation);

let countries = 'Nigeria';
console.log(countries);

let nigeriaPopulation = 1000
console.log(nigeriaPopulation);

let halfOfNigeria= nigeriaPopulation / 2
console.log(halfOfNigeria);

let NewnigeriaPopulation = 1000;
NewnigeriaPopulation++
console.log(NewnigeriaPopulation);

console.log(nigeriaPopulation > finlandPopulation);

console.log(nigeriaPopulation > ghanaPopulation);

let Description = countries + ' is in ' + continent + " and it's " + nigeriaPopulation + ' people speak ' + language
console.log(Description);

// concatinating variables with strings
let blog = 50
let statements = ' the blog has' + blog + 'likes';
console.log(statements);

let traineeName='oyin';
let school = 'Aguda grammer school';
let traineescore=90
let response = ' Abiodun did you know that ' + traineeName + ' attends ' + school + ' and had ' +traineescore + ' in her test ';
console.log(response);

// template litrals or strings(uses backsticks and interpolation)
let newResponse = `Abiodun did you know that ${traineeName} attends ${school} and had a ${traineescore} in her test`
console.log(newResponse);

let classAvailable = 'python fullstack course';
let bootcamp = 'Techstudio Academy';
let stateLocation = 'Lagos';
let regfeeInNaira = 200;
let prospectiveTrainee = 'Praise';
let adminSay = 'Hello ' + prospectiveTrainee + ', ' + bootcamp + ' offers ' + classAvailable + ' in ' + stateLocation + ' and the registration fee is ' + regfeeInNaira;
console.log(adminSay);

// Using Template Literals
let adminsays = `hello ${prospectiveTrainee} ${bootcamp} offers ${classAvailable} in ${stateLocation} and the registeration fee id ${regfeeInNaira}`
console.log(adminsays);

// Arrays- are used for string ccollections,numbers,booleans,and other data types....arrays are represented by square bracet[].
let oyinFavFood = ['rice','indomie','yam','amala']
console.log(oyinFavFood);

// Array properties

// length
let lenghtofoyinFavFood = oyinFavFood.length
console.log(lenghtofoyinFavFood);

// when reassigning do not re-write 'let'
oyinFavFood[0] ='banga'
console.log(oyinFavFood);

// Array methods
// Includes()- determines weaather an element is included mostly returns as true/false
let Includes = oyinFavFood.includes('corn')
console.log(Includes);

//join()
let join = oyinFavFood.join('-');
console.log(join);

// Concat()
let concat = oyinFavFood.concat(['egusi', 'ogbono'])
console.log(concat);

// Push()-add something at the end of the array
let push = oyinFavFood.push('efo-riro')
console.log(oyinFavFood);

// pop()-removes the last element from an array
let pop = oyinFavFood.pop()
console.log(oyinFavFood);


// Assignment 
let classMates = ['Tayo','Denyefa','Abiodun','Praise','Martin','Taiwo','Oyin','Ibrahim']
console.log(classMates);

classMates[0] = 'Pappi'
console.log(classMates);

let Classmatess = classMates.concat('Amos','Mike')
console.log(Classmatess);

let popped = Classmatess.pop('Mike')
console.log(Classmatess);

let add = Classmatess.unshift('Zack','Bobby')
console.log(Classmatess);

let remove = Classmatess.shift('Zack')
console.log(Classmatess);

let newTrainees = classMates.concat('Queen','segun', 'Pius',' emeka')
console.log(newTrainees);
// ======================================================
// 18th January 2023
// =======================================================
// Spread operator- list out items and join items together.

let numbers = [1,2,3,4,5,6];
let NewNumbers = [7,8,9];
let totNum = numbers.concat(NewNumbers)
console.log(totNum);

// with the spread operator
let newCon =[...numbers,...NewNumbers]
console.log(newCon);

let names = ['Peter', 'Sam', 'Paul', 'Judas', 'James', 'John', 'Eggy'];
let firstname = names[0];
console.log(firstname);
let secondname = names[1];
console.log(secondname);

// Destructuring-break down an array or simplyfing
let [zeeworld, one, two, three,...rest] = names
console.log(zeeworld);
console.log(one);
console.log(two);
console.log(three);
console.log(...rest);

// type of- tells us type of data type used
let scoresss=50
console.log(scoresss);
console.log(typeof scoresss);

let pikinName = 'Tores' ;
console.log(pikinName);
console.log(typeof pikinName);

const PC = ['dell','macbook','hp']
console.log(PC);
console.log(typeof PC);

let cart = null
console.log(cart);
console.log(typeof cart);

// Type converion/coersion-convercion is when we manually convert from one data type to another, but coersion is wen javascript does the conversion behind the scene.

// conversion-
const inputYear =Number('1986');
let addedYear =inputYear + 18

console.log(addedYear);
console.log(typeof inputYear);

// lets try and convert sth dts not actually a number

let personName = Number('eggy');
console.log(personName);
console.log(typeof personName);
console.log(typeof NaN);
console.log(String(23),23);


// coercion 

console.log('I am ' + String(22) + ' years old');
console.log('22' * 3);
console.log('22' + 4);
console.log('22' > '2');
console.log('22' - '2');

let z = Number('1') + 1
let w = z - 1
console.log(w);

// comparsion operators
// >, < ==(equalto), ===, !=(not equalto), >=, <=

let YEAR = 2023
console.log(YEAR > 2001);
console.log(YEAR < 2001);
console.log(YEAR >= 2001);
console.log(YEAR != 2001);

// Loose comparison operator == only checks for value and not data type
let SCORE = 100;
let SCORE2 = SCORE == 100
let SCORE3 = SCORE !=100

console.log(SCORE2);
console.log(SCORE3);

// strict comparison operation === checks both value and data types
let SCORE4 = SCORE === 100
let SCORE5 = SCORE !== 100

console.log(SCORE4);


// control flow- loops and conditional statements

console.log('lifing weight repition 1 🏋️‍♀️');
console.log('lifing weight repition 2 🏋️‍♀️');
console.log('lifing weight repition 3 🏋️‍♀️');
console.log('lifing weight repition 4 🏋️‍♀️');
console.log('lifing weight repition 5 🏋️‍♀️');
console.log('lifing weight repition 6 🏋️‍♀️');
console.log('lifing weight repition 7 🏋️‍♀️');
console.log('lifing weight repition 8 🏋️‍♀️');
console.log('lifing weight repition 9 🏋️‍♀️');
console.log('lifing weight repition 10 🏋️‍♀️');

// loop uses the for-keyword,initialiser,condition,final expression and block of code.

for (let i = 1; i < 10; i++) {
    console.log('Eggy lifts weight' + i + '🏋️‍♀️');
}

let guys = ['Ibrahim','Martins','Tunde']
for( let i =0; i<guys.length; i++){
    console.log(guys[i]);
}
// ========================================================
// 19th January 2023
// ========================================================


// while loop
let babes = ['taiwo','oyin','praise']
 let i = 0

 while (i <babes.length){
    console.log((babes[i].toUpperCase()));
    i++
 }

//  ==========for in loop
for (let p  in babes) {
    console.log(babes[p].toUpperCase());
}

// ==========for of
for(let b of babes){
    console.log(b.toUpperCase());
}

// Work

let colors = ['blue', 'pink', 'black', 'red']
for( let i =0; i<colors.length; i++){
    console.log(colors[i]);
}

let b = 0
while (b <colors.length){
   console.log((colors[b].toUpperCase()));
   b++
}

for (let i  in colors) {
    console.log(colors[i].toUpperCase());
}

for(let i of colors){
    console.log(i.toUpperCase());
}

// conditional statements if,else,else if
