const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const yearDivisibleByFourHundred = year % 400 === 0;

    if (divisibleByFour && (!isCentury || yearDivisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

leapYears(700);

// Do not edit below this line
module.exports = leapYears;
