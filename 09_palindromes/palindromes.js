const palindromes = function (str) {
    const strArray = str.toLowerCase().split('').filter(char => {
        let code = char.charCodeAt(0);
        if (code > 47 && code < 58) {
            return true;
        } else if (code > 96 && code < 123) {
            return true;
        }
    });
    
    const reverseArray = strArray.toReversed();

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] !== reverseArray[i]) {
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
