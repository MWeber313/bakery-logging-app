let currentDate = new Date();
let modifiedDate = currentDate;


function dateCalculator (date_arg) {
    let leapYear = false;
    let yearOf = date_arg.getFullYear();
    function isLeapYear(date_arg_ly) {
        if (date_arg_ly % 4) {
            return
        }
        else {
            leapYear = true
        }
        return leapYear;
    }
    isLeapYear(yearOf);
    return yearOf, leapYear;
}

console.log(dateCalculator(modifiedDate));

// export default dateCalculator;

/*

NOTES:
-date_arg = date argument to be passed into the function dateCalculator
-date_arg_ly = date argument to be passed into the function isLeapYear


*/