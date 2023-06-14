// // //FUNCTIONS 
// // function LogName(){
// //     console.log("Hello my name is Leroi.");
// // }
// // LogName();
// // LogName();
// // LogName(); //Code once - call/run/invoke function multiple times. 
// // // Blend juice function 5 applesa and 0 oranges for example: 
// // function BlendJuiceProcess(apples, oranges){ //parameters passed from arguments in call
// //     const juice = `Juice created with ${apples} Apples and ${oranges} Oranges`;
// //     return juice; //returns value
// // }
// // let appleJuice = BlendJuiceProcess(5,0); // value stored in variable
// // console.log(appleJuice); //variable used
// // const appleOrangeJuice = BlendJuiceProcess(2,4);
// // console.log(appleOrangeJuice);
// // // all functions don't have to return something  
// // //FUNCTION DECLARATION - NOTE CAN BE CALLED BEFORE DECLARED!
// // function calcAge1(birthYear){
// //     // const age = 2023 - birtYear; not needed can simply return here
// //     //setting to a variable can help debugging sometimes take note.
// //     return 2023 - birthYear;
// // }
// // // let age1 = calcAge1(1991); again you can use the return value
// // console.log(`The age of the person born in 1991 is ${calcAge1(1991)}`);
// // //AGAIN NOTE called - arguments , declaration of function - Parameters  

// // //FUNCTION EXPRESSION - Cannot be called before initialization 
// // const calcAge2 = function(birthYear){
// //     return 2023 - birthYear;
// // }
// // let age2 = calcAge2(1991);
// // console.log(`Age 2 is also ${age2}`);  

// // //ARROW FUNCTIONS - Shorthand way for function expression.
// // const calcAge3 = birthYear => 2023 - birthYear; 
// // //return is done implicitly not needed to specify. 
// // console.log(`Age 3 with arrow function is also ${calcAge3(1991)}`);
// // //obviously can set to a variable fist also to use:
// // const age3 = calcAge3(1991); 
// // console.log(`arrow value saved to variable first is also = ${age3}`);
// // // NOTE ARROW FUNCTIONS - LEXICAL THIS NOT THEIR OWN THIS - 
// // const yearsToRetirement = (yearOfBirth, firstName) => {
// //     let age = 2023 - yearOfBirth;
// //     let yearsLeft = 65 - age;
// //     return `${firstName} has ${yearsLeft} years left to retirement.`;
// // }
// // console.log(yearsToRetirement(1991,'Leroi'));
// // console.log(yearsToRetirement(2000,'John Doe'));
// // //FUNCTIONS CALLING OTHER FUNCTIONS 
// // function CutFruitBeforeJuiceProcess(apples,oranges){
// //       const applePieces = apples * 4;
// //       const orangePieces = oranges * 2;
// //       return `There are now ${applePieces} apple pieces to blend 
// //       and there are ${orangePieces} orange pieces to blend`;  
// // }

// // function BlendJuiceProcessTwo(apples, oranges){ //parameters passed from arguments in call
// //     const juice = `Juice created with ${apples} Apples and ${oranges} Oranges`;
// //     console.log(CutFruitBeforeJuiceProcess(apples,oranges));
// //     return juice; //returns value
// // }
// // const juiceBlendTwo = BlendJuiceProcessTwo(2,3);
// // console.log(juiceBlendTwo);

// // // EDIT FUNCTION - PRACTICAL 
// // 
// // console.log('!_***_LOOK FROM HERE_***_!');
// // console.log('!_***_LOOK FROM HERE_***_!');

// // const YearsTillRetirement = function(yob,firstName){
// //     let age = calcAvg(yob)
// //     const retirement = 65 - age;
// //     if(retirement < 0 )
// //     return `${firstName} has already retired`;
// //     else if(retirement === 1)
// //     return `${firstName} retires in ${retirement} year`;
// //     else if(retirement === 0)
// //     return `${firstName} retires THIS year`;
// //     else
// //     return `${firstName} retires in ${retirement} years`;
// // }
// // console.log(YearsTillRetirement(1958,"Battered Function"));
// // //1. Make it a regular function expression - OK
// // //2. Make calc age it's own function and call it from within the original arrow function - OK
// // //3. understand the data flow - same named paramaters but local to that function not confusing -  
// // //4. Make provision for some edge cases in retirement age and the message displayed 
// // function calcAvg(yob){
// //     return 2023 - yob;
// // }

// //each team competes 3 times
// //one avg score for each team
// // average score must be at least double of other team to win else no team wins 

// // const calcAverage = (score1,score2,score3) =>{
// //     return (score1 + score2 + score3) / 3;
// // }

// // let scoreDolphins = calcAverage(44,23,71);
// // let scoreKoalas = calcAverage(65,54,49);

// // function checkWinner(avgDolphins, avgKoalas){
// //     if(avgDolphins > (avgKoalas * 2))
// //     return `Dolphins win`;
// //     else if(avgKoalas > (avgDolphins *2))
// //     return `Koalas win`;
// //     else
// //     return `NO TEAM WON`;
// // }
// // console.log(checkWinner(scoreDolphins,scoreKoalas));
// //                 //ARRAYS 
// // var friends = ['one','two','three','four'];
// // console.log(friends[1]); //two
// // console.log(friends[friends.length - 1]); // four
// // const firstName = 'Leroi';
// // const me = [firstName, 'Weitz', 2023 - 1991,'Junior Developer', friends];
// // console.log(me);
// // //SOME ARRAY METHODS REVIEW 
// // const plebs = ['Michael','Steven','Peter'];
// // let newPlebArrayLenght = plebs.push('Jay'); //adds Jay to end of array
// // console.log(plebs);
// // console.log(newPlebArrayLenght);
// // var alsoReturnsNewLength = plebs.unshift('John'); //adds to start of Array
// // console.log(plebs);
// // console.log(alsoReturnsNewLength);

// // let poppedElement = plebs.pop();//removes last element
// // console.log(plebs)
// // console.log('Popped pleb was: ' + poppedElement);

// // let shiftedFromFront = plebs.shift(); //remove from front
// // console.log(plebs);
// // console.log(shiftedFromFront);

// // console.log("Current index of Steven = " + plebs.indexOf("Steven"));

// // console.log(plebs.includes("Steven")); //true  note using strict equality not type coercion 
// // console.log(plebs.includes("Trash")); //false

// // if(plebs.includes("Steven"))
// // console.log("There is indeed a pleb with the name steven playing.");
// // else
// // console.log("NO Steven present");
// console.log('!_***_LOOK FROM HERE_***_!');
// //TIP CALCULATOR CHALLENGE

// function calcTip(bill){
//     if(bill >= 50 && bill <= 300)
//     return bill * 0.15
//     else
//     return bill * 0.2
// }
// const bills = [125,555,44];
// const tips = [(calcTip(bills[0])),calcTip(bills[1]),calcTip(bills[2])];
// console.log(tips);

//OBJECT LITERAL 
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Smith",
//     age: 2023 - 1991,
//     job: 'Junior Developer',
//     friends: ["Michael","Peter","Steven"]
// }
// console.log(jonas.lastName); //Smith
// console.log(jonas["lastName"]);
// //INTERESTING IN THE [] WE CAN PLACE AN EXPRESSION 
// //NOTE THIS DOES NOT WORK WITH DOT NOTATION 
// const nameKey = "Name";
// console.log(jonas["first" + nameKey] + " " + jonas["last" + nameKey]);
// //NOTE 
// let userSelection = prompt("What do you want to know about Jonas? - Choose beween age and lastName ?");
// //NOTE THAT DOT NOTATION DOES NOT WORK
// //NOTE js will read this as property jonas.userSelection not the value there entered - that's why [].
// if(jonas[userSelection]){
//     console.log(`You wanted to know the ${userSelection} of Jonas - it is: ${jonas[userSelection]}`);
// }else{
//     userSelection = prompt("What do you want to know about Jonas? - Choose beween age and lastName ?");
// }

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Smith",
//     birthyear: 1991,
//     job: 'Junior Developer',
//     friends: ["Michael","Peter","Steven"],
//     hasDriversLicence: true,
//     message: function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job} 
//         and he ${this.hasDriversLicence == true ? 'has a drivers licence' : 
//         'does not have a drivers licence.'}`
//     },//NOTE age might not be available it's in a function so call the function!
//     //it works though but careful!
//     calcAge: function(){
//         this.age = 2023 - this.birthyear;
//         return this.age; 
//     }, //yes jonas. would work but using this if the object name changes ? 
// }
// console.log(jonas.calcAge());
// console.log(jonas.age); //created age property to use
// console.log(jonas.message());

//CHALLENGE 7 
/* Write your code below. Good luck! 🙂 */

// let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi =  this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// let john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }
// //IMPORTANT THAT THE METHOD NEEDS TO BE CALLED TO ACCESS BMI PROPERTY CREATED !!!! NB!!!
// mark.calcBMI(); // FUNCTION NEEDS TO BE CALLED TO EXECUTE IT'S METHOD BODY THEN .bmi 
// john.calcBMI(); // BECOMES AVAILABLE ONLY AFTER FUNCTION EXECUTED MAKE SURE TO UNDERSTAND THIS.
// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// }else{
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }


// const types = [];
//     for(let i = 0; i < jonasArray.length; i++){
//         console.log(jonasArray[i]);
//         //fill array - 2 ways below.  
//         // types[i] = typeof(jonasArray[i]);
//         types.push(typeof(jonasArray[i]));
//     };
// // print to check types array 
// console.log(types);
// //calculate ages based on yob and add to ages array
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for(let i = 0; i < years.length; i++){
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

//loop in reverse
// const jonasArray = [
//     'jonas',
//     'sirsurname',
//     2023 - 1991,
//     'junior developer',
//     ['Michael','Peter','Steven'],
//     true
// ];
// //NOTE on the greater than and equal to! 
// //would never execute if it were <= 
// for(let i = jonasArray.length - 1; i >= 0; i--){
//     console.log(jonasArray[i]);
// }
//LOOP WITHIN A LOOP 

// let exercises = ["Exercise One","Exercise Two","Exercise Three"]
// for(let exercise = 0; exercise < exercises.length; exercise++){
//     console.log(exercises[exercise]);
//     //Add another loop for reps note the data flow
//     for(let rep = 1; rep < 6; rep++){
//         console.log(rep + " Rep Done");
//     }
// } //note how the inner loop completes it's process within the outer loop

//WHILE LOOP - not sure of amount of iterations needed
// let diceRoll = Math.floor(Math.random() * 6 + 1);
// while(diceRoll !== 6){
//     console.log(`You rolled a ${diceRoll} try again. . .`);
//     diceRoll = Math.floor(Math.random() * 6 + 1);
// }
// console.log(`Congratulations you won - you rolled a ${diceRoll}`);
// //MAKE SURE TO UNDERSTAND THIS CODE AND THE FLOW OF DATA PERFECTLY
    
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[];
const totals=[];
function calcTip(bill){
    let tipAmount;
    if(bill >= 50 && bill <= 300){
        tipAmount = bill * 0.15;
    } 
    else{
        tipAmount = bill * 0.2;
    }
    return tipAmount;
}
for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}
function calcAverage(arr){
    debugger;
    let sum = 0; // NOTE UNDEFINED if not set to value to start with!!!
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum / arr.length;
} 
console.log(bills);
console.log(tips);
console.log(totals);
console.log(`average = ${calcAverage(totals)}`);

















































