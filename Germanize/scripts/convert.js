let rawdata = [
    ["TH", "Th", "th", "tH", "S", "s"],
    ["Z",  "Z",  "z",  "z",  "Z", "z"]
];

let endingconvert = [
    ["d", "D"],
    ["t", "T"]
]

function convert(str) {
    // Create output variable
    let output = str;

    for (const i in rawdata[0]) {
        output = output.replace(new RegExp(rawdata[0][i], 'g'), rawdata[1][i]);
    }
    
    output = output.replace(new RegExp("W([aeiou])", 'g'), "V$1");
    output = output.replace(new RegExp("w([aeiou])", 'g'), "v$1");
    output = output.replace(new RegExp("w([A-Za-z])([aeiou])", 'g'), "v$1$2");
    output = output.replace(new RegExp("W([A-Za-z])([aeiou])", 'g'), "V$1$2");

    output = output.split(" ");

    for (const i in endingconvert[0]){
        for (const j in output){
            if (output[j].endsWith(endingconvert[0][i])){
                output[j] = output[j].slice(0, -1) + endingconvert[1][i];
            }
        }
    }
    output = output.join(" ");

    // Return the converted string
    return output;
}