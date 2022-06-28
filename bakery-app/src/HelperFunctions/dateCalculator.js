import {gregorianCalendarArray} from './monthArray.js';
import isLeapYear from './isLeapYear';

// Old version

// function dateCalculator (date_arg, n) {
//     console.log("HI", gregorianCalendarArray)
//     // leapYear sets bool var - is this year a leap year?
//     let leapYear = false;
//     // yearOf is int type, built off the parameter that is the current Date (JS obj) and gets the full year
//     let yearOf = date_arg.getFullYear();
//     // isLeapYear checks if the year is a leap year and sets leapYear var accordingly
//     function isLeapYear(date_arg_ly) {
//         if (date_arg_ly % 4) {
//             return
//         }
//         else {
//             leapYear = true
//         }
//         return leapYear;
//     }

//     // This sets the leap year boolean
//     isLeapYear(yearOf);

//     // gets the current month and date, which I need separate
//     let actualMonth = date_arg.getMonth() + 1;

//     let utcMonth = date_arg.getMonth();
//     UTCMONTH IS INDEX LIKE THE ARRAY, STARTING AT 0
//     let actualDate = date_arg.getDate();
//     let modDate = actualDate + n;
    
//     console.log(gregorianCalendarArray[utcMonth].days)
//     console.log(modDate);
//     // this will set the paths between leap and not leap year calculation
//     if (leapYear === false) {
//         if (modDate <= gregorianCalendarArray[utcMonth].days) {
//             return (actualMonth + '/' + modDate)
//         } 
//         else if (modDate > gregorianCalendarArray[utcMonth].days) {
//             actualMonth += 1;
//             modDate = modDate - gregorianCalendarArray[utcMonth].days;
//             return (actualMonth + '/' + modDate)
//         } else {
//             console.error("You goofed");
//             return;
//         }
//     }
    
//     else if (leapYear === true) {
//         return (actualMonth + '/' + modDate)
//     }
    
//     else {
//         console.error("A Boolean must be passed in the first round of conditionals")
//     }
    
//     return (actualMonth + '/' + modDate);
// }





/*

NOTES:
-date_arg = date argument to be passed into the function dateCalculator
-date_arg_ly = date argument to be passed into the function isLeapYear
-n = # of days from the current date to be calculated

*/

let dateCalculator = (date_arg, n) => {
    let leapYear = false;
    let yearOf = date_arg.getFullYear
    
    leapYear = isLeapYear(yearOf)
    
    let actualMonth = date_arg.getMonth() + 1;
    let utcMonth = date_arg.getMonth();
    let actualDate = date_arg.getDate();
    let modDate = actualDate + n;
    
    if (leapYear === false) {
        if (modDate <= gregorianCalendarArray[utcMonth][1]) {
            return (actualMonth + '/' + modDate);
        }
        else if (modDate > gregorianCalendarArray[utcMonth][1]) {
            actualMonth += 1;
            modDate = modDate - gregorianCalendarArray[utcMonth][1];
            return (actualMonth + '/' + modDate);
        }
        else {
            console.error("Error with variable: modDate calculation")
            return;
        }
    } 

    else if (leapYear === true) {
        return (actualMonth + '/' + modDate);
    }

    else {
        console.error("Leapyear must be boolean data type");
        return;
    }
    
}


export {dateCalculator, gregorianCalendarArray}