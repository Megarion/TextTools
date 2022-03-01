let rawdata = "";

// Fetch data (https://raw.githubusercontent.com/Megarion/NOCOPY/main/data/lookalike.txt)
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    rawdata = this.responseText;
}
xhttp.open("GET", "https://raw.githubusercontent.com/Megarion/NOCOPY/main/data/lookalike.txt");
xhttp.send();

function convert(str) {

    // Modify data
    let data = rawdata.split('\n'); // 0 = Normal, 1 = Modified

    // Create output variable
    let output = str;

    for (let i = 0; i < output.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            output = output.replace(new RegExp(data[0][j], 'g'), data[1][j]);
            
        }
    }

    // Return the converted string
    return output;
}