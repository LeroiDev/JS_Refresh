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
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark.toFixed(1)} is higher than John's ${BMIJohn.toFixed(1)}!`);
}else{
    console.log(`John's BMI ${BMIJohn.toFixed(1)} is higher than Mark's ${BMIMark.toFixed(1)}!.`);
}

//STRINGS AND TEMPLATE LITERALS
const FIRSTNAME = "John";
const JOB = "Teacher";
const BIRTHYEAR = 1991;
const YEAR = 2037 - 1991;
const DESCRIPTION = `I'm ${FIRSTNAME}. I am a ${JOB} and I am ${YEAR} years old now.`;
console.log(DESCRIPTION);

//IF STATEMENTS 
let saraAge = 16;
let isLegal = saraAge >= 18;
if(isLegal){
    console.log("Sara is of legal driving age.");
}else{
    console.log(`Sara is not of legal age, she will have to wait ${18 - saraAge} years`);
}
//SOME SCOPE ALSO DO CONSIDER
if((BIRTHYEAR - 2000) <= 2000){
    var century = 20;
}else{
    century = 21
}
console.log(century);

//CONVERSION AND COERCION
let myNum = 100;
let aStringNumber = '5';
console.log(myNum + aStringNumber); //NOTE the 1005 is wrong as there is coercion done by js to make both strings and concat not add numbers 
console.log(myNum + +aStringNumber);
//or you can do 
console.log(myNum + Number(aStringNumber));

console.log(Number("Jonas"));
//NaN is still a number type but this is not correctly converted to a number. 
//NOTE: 
console.log("10" + "3" + "2"); //1032 string coercion 
console.log("10" + "3" - "2"); //101 number coercion 
console.log("10" - "3" - "2"); //5 number coercion 
console.log("10" +10); // 1010
console.log(+"10" +10); // 20

// Truthy and falsy values 
let height = 0; // CATCH this will result in else executing FALSY VALUE
if(height){
    console.log("YAY height is DEFINED");
}else{
    console.log("OFF NO height is UNDEFINED");
}

//EQUALITY OPERATORS
const age = 18;
if(age === 18)
console.log("You just became an adult");
//NOTE avoid using == as if age was a string like '18' that would mean that it would loosely compare to 18 as type coercion will be done 
let favNum = prompt("Enter your favorite number: ");
console.log(favNum); // NOTE THIS IS LOGGED AS A STRING !!! 
console.log(typeof(favNum));
if(favNum === 23){
    console.log(`Cool 23 is a nice number`)
}else{
    console.log(`This will execute only if you used === as the comparison take note`)
}

//LOGICAL OPERATORS
//Sara conditions
let hasDriversLicence = true;   //A 
let hasGoodVision = true;       //B
let isTired = false;            //C
let shouldDrive = hasDriversLicence && hasGoodVision && !isTired; //Set the situation 
if(shouldDrive){ //could have done the comparrison here also obviously 
    console.log("Sara can be allowed to drive"); //In this case she can drive
}else{
    console.log("Someone should rather drive Sara"); 
}
//CODE CHALLENGE - TROPHY TIME 
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
if(scoreDolphins > scoreKoalas)
console.log("Dolphins win the trophy");
else if(scoreKoalas > scoreDolphins)
console.log("Koalas win the trophy");
else
console.log("Both win the trophy");

//SWITCH STATEMENT
let day = 'monday';

//CODE CHALLENGE TIP A BILL
console.log('!***START CHECKING HERE IN THE CONSOLE***!');
const bill = 275;
let tip;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);








































