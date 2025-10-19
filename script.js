function intToRoman(num) {
    // Roman numeral symbols and their values
    const symbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let roman = '';
    
    for (let [symbol, value] of symbols) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;
}

// Example usage
console.log(intToRoman(14));    // XIV
console.log(intToRoman(798));   // DCCXCVIII
console.log(intToRoman(3999));  // MMMCMXCIX

module.exports = intToRoman;

