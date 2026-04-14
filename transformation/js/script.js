const button = document.querySelector("#override-btn");
const biosScreen = document.querySelector("#bios-screen");

const bootSequence = [
    "Initializing hardware environment...",
    "CPU Fan: OK",
    "Memory Test: 65536K OK",
    "Checking NVRAM...",
    "Loading BIOS kernel...",
    "WARNING: User interaction triggered system override.",
    "Web architecture breached.",
    "Displaying raw terminal output."
];

button.addEventListener("click", function() {
    document.body.classList.add("bios-mode");
    
    let i = 0;
    const bootInterval = setInterval(function() {
        if (i < bootSequence.length) {
            const line = document.createElement("p");
            line.textContent = bootSequence[i];
            line.classList.add("bios-line");
            biosScreen.appendChild(line);
            i++;
        } else {
            clearTimeout(bootInterval);
        }
    }, 800); 
});