const sound = new Audio("./audio_idk/lg.mp3");
const poop = sound.play();
const aud = new Audio("./audio_idk/flashlight.mp3")
let audioPLEASEPLAY = false;

sound.loop = true;
sound.volume = 0;

function startMusic() {
    sound.play();

    const fade = setInterval(() => {
        if (sound.volume < 0.05) {
            sound.volume = Math.min(sound.volume + 0.02, 0.2);
        } else {
            clearInterval(fade);
        }
    }, 150);
}

if (poop !== undefined) {
    poop.catch(error => {
        console.warn("Autoplay blocked, waiting for interaction:", error);
        const attemptPlay = () => {
            sound.play()
                .then(() => {
                    document.removeEventListener('click', attemptPlay);
                    document.removeEventListener('keydown', attemptPlay);
                    audioPLEASEPLAY = true;
                })
                .catch(err => console.error("Still blocked:", err));
        };
        document.addEventListener('click', attemptPlay);
        document.addEventListener('keydown', attemptPlay);
        audioPLEASEPLAY = true;
    });
}

startMusic();

// hey, welcome to my code.
// proper stuff from here

// intro

const el = document.getElementById("hi");
const tr = [
    "The room gets darker and darker.",
    "I lie down and reach for my flashlight near me.",
    "However, I feel nothing but the concrete ground.",
    "My fingers brush against it again, before I pull away.",
    "I stare into the void. Quietly praying that I'd grab something.",
    "I reach one more time, desperate I'd grab something. Suddenly—",
    "My fingers brush against something with ridges.",
    "I pick it up and feel a switch; was it my flashlight?",
    "In the darkness, it has to count for something...",
    "right?"
];

async function ballsucker() {
   /* for (let sentence of tr ) {
        el.innerText = "";
        for (let char of sentence) {
            el.innerHTML += char;
            await new Promise(r => setTimeout(r, 50)); // i think this is the uhm, text.
        }
        if (tr.indexOf(sentence) !== tr.length - 1) {
            await new Promise(r => setTimeout(r, 1500)); // pauses.
        }
    } */
    await new Promise(r => setTimeout(r, 1500));
    aud.play();
    document.body.style.cursor = "url('./images/cursor.cur') 0 0, auto";
    document.getElementById("MOMMY-MOMMY").style.display = "none";
    document.getElementById("stinkier").style.display = "block";

    window.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });
}
ballsucker();

// main page

