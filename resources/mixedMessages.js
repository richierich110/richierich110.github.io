//Messages will be randomly generated jokes. The jokes will most likely not make sense.

const button = document.getElementById("mixed-messages-button");
const jokeSetup = document.getElementById("joke-setup");
const jokePunchline = document.getElementById("joke-punchline");

//This is the array containing the strings that first segment of the joke will be selected from.
const messageBeginning = ["Why did the chicken", "Why did the bike", "Why can't you hear a pterodactyl", "Why do cows"];

//This is the array containing the strings that second segment of the joke will be selected from.
const messageMiddle = ["cross the road?", "fall over?", "go to the bathroom?", "wear bells?"];

//This is the array containing the strings that third and final segment of the joke will be selected from.
const messageEnd = ["To get to the other side.", "It was two tired.", "The P is silent.", "Because their horns don't work."];

//Main function that randomly selects message components, combines them, and outputs to the console.
function mixedMessages(){
    //Generate random first part
    const message1 = messageBeginning[Math.floor(Math.random() * messageBeginning.length)];

    //Generate random second part
    const message2 = messageMiddle[Math.floor(Math.random() * messageMiddle.length)];

    //Generate random last part
    const message3 = messageEnd[Math.floor(Math.random() * messageEnd.length)];

    //Combine parts into message and change text
    jokeSetup.innerText = message1 + " " + message2;
    jokePunchline.innerText = message3;
}

button.addEventListener("click", mixedMessages);
