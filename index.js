console.log("Hello, GitHub Actions");

function division(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
}

module.exports.division = division;