function convert(str) {
    let emojis = ["😠", "😡", "😤", "💢", "🤬"];

    // Create output variable
    let output = str;
    let words = [];
    let lines = [];
    let questions = [];
    let exclamation = [];
    let sentences = [];

    // Remove unnecessary spaces from input
    output = output.replace(/\s\s+/g, ' ');

    // Capitalize input
    output = output.toUpperCase();

    // Split words into arrays
    words = output.split(" ");

    // Emojis
    for(let i = 0; i < words.length; i++){
        const random = Math.floor(Math.random() * 5);
        if(random == 0){
            let emojiText = " ";
            const emojiCount = Math.floor(Math.random() * 8) + 1;
            for(let j = 0; j < emojiCount; j++){
                emojiText += emojis[Math.floor(Math.random() * emojis.length)];
            }
            words[i] += emojiText;
        }
    }

    // Set output to modified text
    output = words.join(" ");

    // Split lines into arrays
    lines = output.split("\n");

    // Emojis
    for(let i = 0; i < lines.length; i++){
        const random = Math.floor(Math.random() * 5);
        if(random == 0){
            let emojiText = " ";
            const emojiCount = Math.floor(Math.random() * 8) + 1;
            for(let j = 0; j < emojiCount; j++){
                emojiText += emojis[Math.floor(Math.random() * emojis.length)];
            }
            lines[i] += emojiText;
        }
    }

    // Set output to modified text
    output = lines.join("\n");

    // Split questions into arrays
    questions = output.split("?");

    // Question marks
    for(let i = 0; i < questions.length-1; i++){
        let quesText = "";
        const quesCount = Math.floor(Math.random() * 8) + 1;
        for(let j = 0; j < quesCount; j++){
            if(Math.floor(Math.random() * 3) == 0){
                quesText += "!";
            } else {
                quesText += "?";
            }
        }
        questions[i] += quesText;
    }

    // Set output to modified text
    output = questions.join("");

    // Split exclamations into arrays
    exclamation = output.split("!");

    // Exclamation marks (to more exclamation marks)
    for(let i = 0; i < exclamation.length-1; i++){
        let markText = "";
        const markCount = Math.floor(Math.random() * 8) + 1;
        for(let j = 0; j < markCount; j++){
            markText += "!";
        }
        exclamation[i] += markText;
    }

    // Set output to modified text
    output = exclamation.join("");

    // Split sentences into arrays
    sentences = output.split(".");

    // Exclamation marks (from periods)
    for(let i = 0; i < sentences.length-1; i++){
        let markText = "";
        const markCount = Math.floor(Math.random() * 8) + 1;
        for(let j = 0; j < markCount; j++){
            markText += "!";
        }
        sentences[i] += markText;
    }

    // Set output to modified text
    output = sentences.join("");

    // // Fix the spacing issue
    // output = output.replace(/\n/g, "\n");

    // Return the converted string
    return output;
}