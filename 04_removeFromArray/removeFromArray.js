function doesNotStrictlyEqualElement(element){
    const isNotStrictlyEqual = function (value){
        return value !== element;
    }
    return isNotStrictlyEqual;
}

const removeFromArray = function(array, ...valsToRemove) {
    console.log(array)
    let output = array;
    for (let idx = 0; idx < valsToRemove.length; ++idx){
        output = output.filter(doesNotStrictlyEqualElement(valsToRemove[idx]));
        console.log(output);
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
