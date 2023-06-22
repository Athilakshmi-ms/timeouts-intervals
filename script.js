//1000 milliseconds = 1 second

let interval;
let times = 0;

function heyYou() {
    console.log("Hey! You! I called you " + times + " times!");
    times++;
}

buttonThreeSeconds = document.createElement("button");
buttonThreeSeconds.textContent = "say hey every 3 seconds";
buttonThreeSeconds.addEventListener("click", () => {
    interval = setInterval(heyYou, 3000);
});

buttonStop = document.createElement("button");
buttonStop.textContent = "Stop saying hey";
buttonStop.addEventListener("click", () => {
    // We must first check if there is an interval
    if (interval != undefined) {
        clearInterval(interval);
    }
});

document.body.appendChild(buttonThreeSeconds);
document.body.appendChild(buttonStop);
//--------------------------------------------------------------

/*Write a function that mimics the behaviour of a typewriter.
Using setInterval display the word prout one character at a time (one letter per second). 
Once the word is written on the screen clear the interval.*/

function typewriterfunc() {
    const word = "Athi";
    let index = 0;

    const interval = setInterval(() => {
        if (index < word.length) {
            const currentChar = word[index];
            let p = document.createElement('p');
            document.body.appendChild(p);
            p.innerText = currentChar;
            //console.log(currentChar);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}
typewriterfunc();
//-------------------------------------------------------------

/* Write a function that displays every second that has passed on the page since it was opened.
The display should be refreshed every second. 
If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.*/

function displaySecondsPassed() {
   let seconds = 0;
 
   setInterval(() => {
     seconds++;
 
     if (seconds % 60 === 0) {
       const minutes = seconds / 60;
       if (minutes === 1) {
         console.log("A minute has passed.");
       } else {
         console.log(`${minutes} minutes have passed.`);
       }
     } else {
       console.log(`${seconds} seconds have passed.`);
     }
   }, 1000); 
 }
 
 // Call the function to start displaying seconds passed
 displaySecondsPassed();
