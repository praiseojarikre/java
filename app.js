// Javascript-
// It is a high level OOP-Object oriented programme.
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
import { Data, PEOPLE} from "./db.js";
console.log(Data);
console.log(PEOPLE);




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

for (let i = 1; i <= 10; i++) {
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
 let AGE = 500

 if (AGE === 500){
    console.log('oga u don old');
 }else{
    console.log('please type in a valid age');
 }

 let password ='passwordssss';
 console.log(password.length);

 if(password.length >= 12){
    console.log('thats a very strong password');
 }else if (password.length >=8){
    console.log('password is good');
 }else if (password.length >=4){
    console.log('password is weak');
 }else{
    console.log('please password should be at least 4 hrs long');
 }

//  Logical operators
// || (double pipe) means logical or
// &(ampersand) means logical and

// For logical and- as afr there is a false in the statement if will read as false
//FOR LOGICAL AND 
// True && True = True
// True && False = False
// False && True = False 
// False && False = False

console.log(true && true);
console.log(true && false);
console.log( false && true);
console.log( false && false);
console.log(1111111111111111111111);

// for logical or- as far as there is a true in the statement it will read as true.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!false);
console.log(!true);

let PASSWORD = 'pass@';
// if(PASSWORD.length >= 7 && PASSWORD.includes('@')){
//   console.log('super strong');
// }else if(PASSWORD.length >= 4 || PASSWORD.includes('$')){
//   console.log('password is good');
// }else{
//   console.log('Password is\'nt good enuff');
// }
if(PASSWORD.length >= 7 && PASSWORD.includes('@')){
  console.log('super strong');
}else if(PASSWORD.length >= 15 || PASSWORD.includes('@') && PASSWORD.length >= 2 && PASSWORD.includes('*') && PASSWORD.length >= 17){
  console.log('password is good');
}else{
  console.log('Password is\'nt good enuff');
}

// let newPassword = prompt('type a password')

// if (newPassword.length >=12 && newPassword.includes('@')){
//     alert('very very strong')
// }else if(newPassword.length >= 8 || newPassword.includes('*')){
// alert('password is good')
// }else{
//     alert('password is weak')
// }

// let inputtedNumber = prompt ('please type a  number');

// if (inputtedNumber % 2=== 0){
//     alert('even number')
// }else{
//     alert('odd number')
// }

// break and continue
let Result =[20,40,0,50,100,15,4,5,7]

for (let a = 0; a < Result.length; a++) {
    // console.log(Result[a]);
    if (Result[a] === 0){
        continue
    }
    if (Result[a] === 100){
    break
    }
    console.log(Result[a]);
}
// Using if statement
let Grade = 'Z'

if(Grade === 'A'){
  console.log('You got A');
}else if(Grade === 'B'){
  console.log('You got B');
}else if(Grade === 'C'){
  console.log('You got C');
}else if(Grade === 'D'){
  console.log('You got D');
  
}else{
  console.log('You Failed!!!');
}
// Using Switch case

let Points = 'B'
switch(Points){
  case 'A':
    console.log('You got A');
    break
  case 'B':
    console.log('You got B');
    break
  case 'C':
    console.log('You got C');
    break
  case 'D':
    console.log('You got D');
    break
  default:
    console.log('You failed');
}

// using data below...calculate the BMI for both Abidun and Oyin...
// and also with a conditional statement....if Abiodun's BMI is more dan Oyin...
// print to d console Abiodun's Bmi is greater than Oyin,else
// bmi = mass / height ** 2
// Given dt Abiodun/Oyin height   10/9
// Abiodun/Oyinweight 60/70
// Hint Use if statement

let AbiodunHeight = 10;
let OyinHeight = 9;
let AbiodunWeight = 60;
let OyinWeight = 70;

let AbiodunBMI = AbiodunWeight / AbiodunHeight ** 2
console.log(AbiodunBMI);

let OyinBMI = OyinWeight / OyinHeight ** 2
console.log(OyinBMI);

if(AbiodunBMI > OyinBMI){
  console.log('abiodun bmi is greater than oyin bmi');
} else{
  console.log('Oyin Bmi is greater than abiodun bmi');
}
// ========================================================================================================
// 23rd January 2023
// ========================================================================================================
// Tenary operators====
  

AbiodunBMI > OyinBMI
? console.log("abiodun's bmi is greater than oyin's bmi")
: console.log("oyin's bmi is greater than abiodun's bmi");

// global scope, local (black and function) scope

let AGES = 1000

if(true){
  let AGES = 2000
  console.log('inside 1st block: ' + AGES);
  if(true){
      let AGES = 3000
      console.log('inside 2nd code block' + AGES);
  }
}
console.log('outside block of code: ' + AGES);
{
  let d = 'Doyin';
  console.log(d);
}

// Functions-functions are building blocks of any language(object data type) help to write code somewhere and use when needed.
// types of functions- Declaration,expression and arrow function 
// its can only work when it is CALL,RUN,INVOKE. 
// Functions are re useable
// keyword for ftn is ftn keyword,ftn name and a block of code

// function declaration
// it accepts hoisting

function team() {
  let name = 'oyin'
  console.log(' hello ' + name);
}
team()

// funtion expression
// it does not accept hoisting

let speak = function() {
  let myColor ='yellow';
  console.log(myColor); 
}
speak()


// Arrow ftn
// it doesnt accept hoisting

let newTrainer = ()=>{
  let myColor = 'ýellow'
  console.log(myColor);
}

newTrainer()

// parameters and arguments
//  Parameter is to the variable
// Argument is to the invoke

function useName (name) {
    let person = `Hi my name is ${name}`
    console.log(person);
}
useName('Oyin')

let useSpeaks = function(names){
    let person = 'Hello my name is ' + names
    console.log(person);
}
useSpeaks('Emma')

let useGreet = day =>{
    let statement = `Good ${day}`
    console.log(statement);
}
useGreet('afternoon')

  const useGreets = function(name,time){
    let description = `Good ${time} ${name}`
    console.log(description);

}
useGreets('Oyin','afternoon')

let calcAge = year=>{
    let personYear = 2023 - year
    console.log(personYear);
}
calcAge(1995)

// We have 2 tech teams(Spartans and alpha)
// They compete against each other 3 times, the winner with highest average score wins the trophy.
// Calculate the average score for each team using data below.
// Spartans score - 60, 70, 80
// Alpha score - 88, 91, 120
// Compare the teams average score to determine the winner of the competition and print to the console...
// Hint, use an if, else statements
// and also ternary opertor

let Spartans = (60,70,80)
let totalSpartans = (60+70+80)
let AvrgSpartans = (totalSpartans / 3)


let  Alpha = (88,91,120)
let totalAlpha = (88+91+120)
let AvrgAlpha = (totalAlpha / 3)

// if (AvrgSpartans > AvrgAlpha) {
//   console.log('spartans is greater');
// } else{
//   console.log('not applicable');
// }

if (AvrgAlpha > AvrgSpartans) {
  console.log('Alpha is the winner');
} else{
  console.log('not the winner');
}

AvrgAlpha > AvrgSpartans
? console.log("alpha is the winner")
: console.log("spartans is the loser");

 // ===================================================================
// 24th jan 2023
// =====================================================================
//  Returning variables from a function

// You can not have more than one return keyword. Every command after the return keyword is useless.
// The essence of the return is to allow you to use a varaibale outside the function scope(block).

let getProgramme  = ()=>{
  let stack = 'javascript fullstack'
  console.log(stack);
  return stack

}
let newStack = getProgramme()

console.log(newStack);

let getUser = food =>{
  let word = `Hello Praise did you know Denyifa ate ${food} wraps of eba`
  console.log(word);
  return word
}

let newWord = getUser(20)
console.log(newWord);

let reterate = newWord + ' after class'
console.log(reterate);

let fees = [60,80,0,120];
let peeps = ['Praise', 'Charles', 'Oyin', 'Tayo']

function getDetails(sth, newSth) {
  for(let i = 0; i < sth.length; i++){
    if(sth[i] ===0){
      continue
    }
    console.log((sth[i]));
  }
  
  for(let i = 0; i < newSth.length; i++){
    console.log(newSth[i].toUpperCase());
  }
}
getDetails(fees, peeps)

// Exercise
// There are 2 teams, Alpha and Spartans.
// Each team competes 3 times and the average of the 3 scores is calculated( one average score per team)
// A team only wins if it has atleast double the average score of the other team otherwise no team wins.
// 1) create an arrow function 'calcAverage' to calculate the average of 3 scores. 
// 2) use the function to calculate the average for both teams.
// 3) Create a function 'checkWinner' that takes the average score of each team as parameters ('aveAlpha' and 'aveSpartan') and then log the winner to the console together with the victory points, according to the rule above, i.e Spartan wins(30, vs 13)
// 4) use the checkWinner function to determine the winner for both Data
// 5) ignore draws this time
// Test Data 1 -- Alpha scores 43, 21 and 73. Spartan scores 63,55, and 47
// Test Data 2 -- Alpha scores 87,55 and 39. Spartan scores 21,33 and 27


let calcAverage = (a,b,c) =>{
  let average = [a+b+c] / 3
  // console.log(average);
  return average
}
calcAverage(1,2,3)
let alphascores =calcAverage (43,21,73)
console.log(alphascores);
let Spartanscores = calcAverage(63,55,47)
console.log(Spartanscores);

function checkwinner(aveAlpha,avespartan) {
  if (aveAlpha > 2 * avespartan){
    console.log(`alpha wins ${aveAlpha} vs ${avespartan}`);
  }else{
    console.log(`spartan wins ${avespartan} vs ${aveAlpha}`);
  }
}
checkwinner(alphascores,Spartanscores)

alphascores > Spartanscores
? console.log('alpha wins')
: console.log('spartan wins');



// higher order and call back function
// higher order ftns accepts another functon as an argument or returns another function as a result
// call back functions are ftns passed to another function as an argument and executed inside that ftn.




function getHello() {
  // let sayHI = 'hi'
  return 'hi' 
}

let getReport = (talk)=> {
  console.log(talk());

  let state = `${talk()} taiwo did you see ibrahim`
  console.log(state);
}

getReport(getHello)


// object ------object literal,math object,dates
// higher order functions(foreaCh,map,filter,find,findindex,reduce)
// DOM(document object model)

// Object has key and value. Both are called property

let client = ['Oyin', 'Damola', 'black', ['Taiwo', 'Praise', 'Charles','Ibrahim'], 2023 - 1986]
console.log(client);
console.log(typeof client);

let customer = {
    firstName: 'Oyin',
    lastName: 'Damola',
    complexion: 'black',
    friends: ['Taiwo', 'Praise', 'Charles','Ibrahim'],
    age: 2023-1986,
    date: Date(),
    canDrive: true,

}
console.log(customer);
console.log(typeof customer);

let newCustomer ={
  country: 'Nigeria',
  state: 'Oyo'
}

let finalCustomer = {...customer, ...newCustomer}
console.log(finalCustomer);

// ===============================================
// 25th january 2023
// ===============================================

// dot vs backet
let newApplicant = {
  firstName: 'Tayo',
  lastName: 'John',
  skinColor: 'dark',
  tribe: 'yoruba',
  age: 18,
  address: {
    stateOfOrigin: 'Ibadan',
    stateOfResidence: 'Lagos',
    lgs: 'surulere'
  },
  favFoods: ['banga', 'egusi', 'rice', 'amala'],
  canDrive: true,
  profession: 'senior front-end Dev',
  canSmoke: false,
  numberOfKids: null,
}

// dot notation
// accessing firstname
let newApplicantFirstName = newApplicant.firstName.toUpperCase()
console.log(newApplicantFirstName);
// acccessing favfoods
let newApplicantFavfoods = newApplicant.favFoods
console.log(newApplicantFavfoods);
// accesing stateofresidence
let newApplicantaddress = newApplicant.address.stateOfResidence
console.log(newApplicantaddress);

// Bracket
// accessing firstname
let BracketApplicantfirstname = newApplicant['firstName'].toUpperCase()
console.log(BracketApplicantfirstname);
// accesssing stateofresidence
let BracketApplicantaddress = newApplicant['address']['StateOfResidence']
console.log(BracketApplicantaddress);

// Destructuring objects
let account = {
  namess : 'uloma',
  ages : 50,
  colour : 'black',
}
console.log(account);

let nameInaccount =account.namess
console.log(nameInaccount); 
let ageInAccount = account.ages
console.log(ageInAccount);

// Now let's use destructuring
let {ages, namess, colour} = account
console.log(ages);
let removeAge = delete account.ages
console.log(account);

// object method
let passenger = {
  firstName: 'Oyeindenyifa',
  lastName: "Diegbegha",
  year: 2023,
  busFareInNaira: 200,
  pocketMoneyInNaira: 1000,
  currentDate: Date(),
  calcBal: function(){
    let statement = `${this.firstName} has ${this.pocketMoneyInNaira - this.busFareInNaira} naira`
    console.log(statement);
    // return statement
  },
  
}

passenger.calcBal()
console.log(passenger);

console.log(this);
// 'this' can be used to replace a variable if used inide the curly bracket, and it can be used to call the
//  whole window if used without being inside the bracket.
  
  // Exercise
  // 1)Create an object for Ibrahim and Oyin... With properties(full name, mass and height)
  // 2) create a 'calcBMI' method on both object to calculate the BMI(same method on both objects).
  //  Store the BMI value to a property, and also return from the method.
  // 3) then log to the console who has the higher BMI, together with the fullname and the respective BMI 
  // .... Example Ibrahim BMI(30.1) is higher than Oyin's BMI(29.9)
  // Test Data
  // Ibrahim's weight 76 and height is 1.99
  // Oyin's weight 80 and height is 2.1
  
  
  
  // Ibrahim's data
  let Ibrahim = {
    fullName: 'Ibrahim',
    mass:76,
    heigth: 1.99,
    calcBMI: function(){
      return this.mass / this.heigth ** 2
    }
  }

  let ibrahimBMI = Ibrahim.calcBMI()
  console.log(ibrahimBMI)
  // ===================
  // Oyin's data
  let Oyin = {
    fullName: 'Oyin',
    mass:80,
    heigth: 2.1,
    calcBMI: function(){
      return this.mass / this.heigth ** 2
    }
  }
  
  let oyiBMI = Oyin.calcBMI()
  console.log(oyiBMI)
  
  // Conditional statement
  
  let BMI = ibrahimBMI > oyiBMI ? `Ibrahim's BMI ${ibrahimBMI} is higher than Oyin's BMI ${oyiBMI}`: `Oyin's BMI ${oyiBMI} is higher `
  
  console.log(BMI);


  // Arrays methods
  // higher order functions(map,reduce,filter,for each, find,findindex)
  // for loop=================================
  // modules means import and export of data
  for (let i = 0; i < Data.length; i++) {
    console.log(Data[i]);
    
  }
  // for each()
  // it doesnt return a new array
  // it loops

Data.forEach (
  (s)=>{
    console.log(s.name);
  }
)
function newData(singleData) {
  console.log(singleData);
}

Data.forEach(newData)

// MAP METHOD
// IT returns a new array
// it doesnt change the size of the original array
// uses value from the original array
// it loops


let anodaPerson = PEOPLE. map(person => person)
console.log(anodaPerson);