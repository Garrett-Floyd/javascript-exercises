function isLetter(char){
    return /[a-z0-9]/i.test(char);
}

const palindromes = function (string) {
    array = Array.from(string.toLowerCase());
    array = array.filter(isLetter);

    let returnFlag = false;
    if (array.toString() === array.reverse().toString()) {
        returnFlag = true;
    }
    return returnFlag;
};

// Do not edit below this line
module.exports = palindromes;
