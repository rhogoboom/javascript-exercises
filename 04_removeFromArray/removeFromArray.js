const removeFromArray = function(input, remove) {
    const removes = [...arguments].slice(1);
    returnArray = []

    for (n of input) {
        if (!removes.includes(n)) {
            returnArray.push(n);
        }
    }
    return returnArray

};

// Do not edit below this line
module.exports = removeFromArray;
