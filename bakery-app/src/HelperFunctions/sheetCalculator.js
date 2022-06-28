import { cookieSheetArray } from "./sheetArray";
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

function sheetCalculator (type, boxes) {
    let amountPerSheet = cookieSheetArray[type][1];
    let totalBoxes = Math.ceil(boxes/amountPerSheet);
    return totalBoxes;
}

let test = sheetCalculator('16', 3);

console.log(test)

