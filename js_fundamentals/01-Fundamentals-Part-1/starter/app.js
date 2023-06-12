// VARIABLES
let js = 'amazing';
if (js === 'amazing')
alert("JS is amazing");
console.log('Hello there...');

let country = 'South Africa';
let continent = 'Africa';
let population = 59003000;
console.log(country + ' is in the continent of ' + continent + ' and has a population of about: ' + population + ' people');

// DATA TYPES
let year;
console.log(year); //undefined
console.log(typeof(year));
year = 1991;
console.log(year) //1991
console.log(typeof null) //NOTE OBJECT - bug? 

// DATA TYPES PRACTICE
let isIsLand = true;
let language;
let myExtraVar = null;
console.log(typeof isIsLand)            //Boolean 
console.log(typeof population)          //number
console.log(typeof country)             //string
console.log(typeof language)            //undefined 
console.log(typeof myExtraVar)          //Object  -- Remember this is OBJECT

//LET - VAR - CONST
language = 'Afrikaans';
const MYYEAROFBIRTH = 1991;

//BASIC OPERATORS
let myAge = 2023 - MYYEAROFBIRTH;
console.log(myAge);
let splitPopulation = population / 2;
console.log("In each half there would be: " + splitPopulation + " people.");
console.log("Adding one person to the split half: " + splitPopulation++);
let finlandPopulation = 6000000;
if(finlandPopulation > population)
console.log("Finland has the greater population");
else
console.log("South Africa has the greater population");


//CODING BMI CALCULATION CHALLENGE
//STRINGS AND TEMPLATE LITERALS
console.log('START CHECKING HERE. . .');
let massMark = 78;
let heighMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heighMark * heighMark); 
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);











































