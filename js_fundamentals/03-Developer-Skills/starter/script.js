// Remember, we're gonna use strict mode in all scripts now!
function PrintForeCast(arr){
    let celciusString = "";
    for(let i = 0; i < arr.length; i++){
        celciusString += `...${arr[i]}°C in ${i+1} days`;
    }
    return celciusString;
}
let testArray1 = [17,21,23];
let testArray2 = [12,5,-5,0,4];
console.log(PrintForeCast(testArray1));
console.log(PrintForeCast(testArray2));
