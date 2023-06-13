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
const jonas = {
    firstName: "Jonas",
    lastName: "Smith",
    age: 2023 - 1991,
    job: 'Junior Developer',
    friends: ["Michael","Peter","Steven"]
}
console.log(jonas.lastName); //Smith
console.log(jonas["lastName"]);
//INTERESTING IN THE [] WE CAN PLACE AN EXPRESSION 
//NOTE THIS DOES NOT WORK WITH DOT NOTATION 
const nameKey = "Name";
console.log(jonas["first" + nameKey] + " " + jonas["last" + nameKey]);
//NOTE 
let userSelection = prompt("What do you want to know about Jonas? - Choose beween age and lastName ?");
//NOTE THAT DOT NOTATION DOES NOT WORK
//NOTE js will read this as property jonas.userSelection not the value there entered - that's why [].
if(jonas[userSelection]){
    console.log(`You wanted to know the ${userSelection} of Jonas - it is: ${jonas[userSelection]}`);
}else{
    userSelection = prompt("What do you want to know about Jonas? - Choose beween age and lastName ?");
}

















