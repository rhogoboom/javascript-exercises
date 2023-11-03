const sumAll = function(first, second) {
    if(first < 0 || second < 0 || typeof first !== 'number' || typeof second !== 'number') {
        return 'ERROR'
    }
    let low = Math.min(first, second);
    let high = Math.max(first, second);

    return ((high + 1 - low) * (low + high)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
