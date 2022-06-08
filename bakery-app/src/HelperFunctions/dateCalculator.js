let currentDate = new Date();
let modifiedDate = currentDate;
import {gregorianCalendarArray} from './monthArray.js';

function dateCalculator (date_arg, n) {
    // leapYear sets bool var - is this year a leap year?
    let leapYear = false;
    // yearOf is int type, built off the parameter that is the current Date (JS obj) and gets the full year
    let yearOf = date_arg.getFullYear();
    // isLeapYear checks if the year is a leap year and sets leapYear var accordingly
    function isLeapYear(date_arg_ly) {
        if (date_arg_ly % 4) {
            return
        }
        else {
            leapYear = true
        }
        return leapYear;
    }

    // This sets the leap year boolean
    isLeapYear(yearOf);

    // gets the current month and date, which I need separate
    let currMonth = date_arg.getMonth();
    let currDate = date_arg.getDate();
    let modDate = currDate + n;

    // this will set the paths between leap and not leap year calculation
    if (isLeapYear === false) {
        
        
    }

    else if (isLeapYear === true) {

    }
    
    else {
        console.error("A Boolean must be passed in the first round of conditionals")
    }
    
}
console.log(currentDate)
console.log(modifiedDate)

console.log(dateCalculator(modifiedDate));

// export default dateCalculator;

/*

NOTES:
-date_arg = date argument to be passed into the function dateCalculator
-date_arg_ly = date argument to be passed into the function isLeapYear
-n = # of days from the current date to be calculated

*/