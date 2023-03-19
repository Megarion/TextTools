let rawdata = [
    ["TH", "Th", "th", "W", "w"],
    ["Z",  "Z",  "z",  "V", "v"]
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