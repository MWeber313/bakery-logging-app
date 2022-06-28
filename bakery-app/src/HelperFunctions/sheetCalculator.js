// import { cookieSheetArray } from "./sheetArray";
/*

Cookie sheet calculator psuedo:

Arguments taken in: Type of cookie, how many boxes of that type
-type of cookie should be a string?
-boxes should be a whole number

Returns: How many sheet trays needed

Type of cookie is checked against an array which returns how many boxes can be made per sheet

16: 1.5 boxes
10: 2 boxes
6: 3 boxes

The number of sheet trays should be a whole number

If the number of sheet trays is not a whole number, it should be rounded UP to a whole number


*/

let cookieSheetArray = [
    ['16', 1.5],
    ['10', 2],
    ['6', 3]
]

let cookieSheetObject = {
    '16': 1.5,
    '10': 2,
    '6': 3
}

function sheetCalculator (type, boxes) {
    console.log(type, typeof(type));
    let amountPerSheet = cookieSheetObject[type];
    console.log(amountPerSheet, typeof(amountPerSheet));
    let totalBoxes = Math.ceil(boxes/amountPerSheet);
    return totalBoxes;
}

let test = sheetCalculator('16', 3);
console.log(test);

let test2 = sheetCalculator('10', 4);
console.log(test2);

let test3 = sheetCalculator('6', 6);
console.log(test3);