const fibonacci = function(input) {
    const num = Math.round(Number(input));
    if (num > 1) {
        return fibonacci(num - 1) + fibonacci(num - 2);
    } else if (num === 1) {
        return 1;
    } else if (num === 0) {
        return 0;
    }
    else{
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
