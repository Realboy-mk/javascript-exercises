const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isCenturyYear = year % 100 === 0;
    const isFourHundredYear = year % 400 === 0;
    if (isDivisibleByFour && (!isCenturyYear || isFourHundredYear)){
        return true;
    }else return false;
};

// Do not edit below this line
module.exports = leapYears;
