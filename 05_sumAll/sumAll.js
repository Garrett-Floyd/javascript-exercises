const sumAll = function(firstNum, secNum) {
    let totSum = 0
    if (Number.isInteger(firstNum) && Number.isInteger(secNum) && firstNum >= 0 && secNum >= 0) {
        let lowNum = 0;
        let highNum = 0;
        if (firstNum <= secNum) {
            lowNum = firstNum;
            highNum = secNum;
        } else {
            lowNum = secNum;
            highNum = firstNum;
        }
        for (let idx = lowNum; idx < highNum + 1; ++idx){
            totSum += idx;
        }       
    } else {
        totSum = "ERROR";
    }
    
    return totSum;
};

// Do not edit below this line
module.exports = sumAll;
