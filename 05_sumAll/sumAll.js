const sumAll = function(firstNum, lastNum) {
    if (firstNum > lastNum){
        const x = firstNum;
        firstNum = lastNum;
        lastNum = x;
    }
    if (firstNum < 0 || lastNum < 0){
        return 'ERROR';
    } else if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)){
        return 'ERROR';
    }
    let total = 0;
        for (let i = firstNum; i <= lastNum; i++){
        total += i;
        }
        return total;
};

// Do not edit below this line
module.exports = sumAll;
