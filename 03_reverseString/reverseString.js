const reverseString = function(string) {
    let output = "";
    for (let i = 0; i < string.length; ++i) {
        output += string.at(-(i+1));
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
