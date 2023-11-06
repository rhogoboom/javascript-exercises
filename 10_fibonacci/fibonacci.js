const fibonacci = function(n) {
    let parsedN = parseInt(n);
    
    if (parsedN < 0) {
        return 'OOPS'
    }
    if (parsedN < 2) {
        return parsedN
    }

    return fibonacci(parsedN - 1) + fibonacci(parsedN - 2)

};

// Do not edit below this line
module.exports = fibonacci;
