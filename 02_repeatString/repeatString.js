const repeatString = function(str, num) {
    let result = "";

    if (num < 0) {
        result = "ERROR";
    }

    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
};

const number = Math.floor(Math.random() * 1000);

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
