let currentDate = Date.now();
let modifiedDate = currentDate;
console.log(modifiedDate);

function dateCalculator (date_arg) {
    let leapYear = false;
    let yearOf = currentDate.getYear();
    function isLeapYear(date_arg_ly) {
        if (date_arg_ly % 4) {
            leapYear = true
        }

        return leapYear;
    }
    isLeapYear(yearOf);
    
}

export default dateCalculator;

/*

NOTES:
-date_arg = date argument to be passed into the function dateCalculator
-date_arg_ly = date argument to be passed into the function isLeapYear


*/