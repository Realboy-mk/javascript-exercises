const removeFromArray = function(array, ...numbers) {
    const newArray = [];
    array.forEach(element => {
        if (!numbers.includes(element))
            newArray.push(element);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
