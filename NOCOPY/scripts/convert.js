let rawdata = [
    ["A", "a", "B", "b", "C", "c", "E", "e", "H", "K", "M", "O", "o", "P", "p", "T", "X", "x", "y", "3"],
    ["А", "а", "В", "Ь", "С", "с", "Е", "е", "Н", "К", "М", "О", "о", "Р", "р", "Т", "Х", "х", "у", "З"],
];

function convert(str) {
    // Create output variable
    let output = str;

    for (let i = 0; i < output.length; i++) {
        for (let j = 0; j < rawdata[0].length; j++) {
            output = output.replace(new RegExp(rawdata[0][j], 'g'), rawdata[1][j]);
        }
    }

    // Return the converted string
    return output;
}