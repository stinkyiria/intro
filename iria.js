const sound = new Audio("./audio_idk/lg.mp3");
const poop = sound.play();
const aud = new Audio("./audio_idk/flashlight.mp3")
let audioPLEASEPLAY = false;

sound.loop = true;
sound.volume = 0;

async function balls(audioObj, islooping = false) {
    try {
        await audioObj.play();
    } catch (err) {
        console.warn("Autoplay blocked, waiting for interaction.");
        const handler = () => {
            audioObj.play().then(() => {
                document.removeEventListener('click', handler);
                document.removeEventListener('keydown', handler);
            });
        };
        document.addEventListener('click', handler);
        document.addEventListener('keydown', handler);
    }
}

function no() {
    sound.play();

    const fade = setInterval(() => {
        if (sound.volume < 0.05) {
            sound.volume = Math.min(sound.volume + 0.02, 0.2);
        } else {
            clearInterval(fade);
        }
    }, 150);
}

balls(sound, true);
no();

// hey, welcome to my code.
// proper stuff from here

// intro

const el = document.getElementById("hi");
const tr = [
/*   "The room gets darker and darker.",
    "I lie down and reach for my flashlight near me.",
    "However, I feel nothing but the concrete ground.",
    "My fingers brush against it again, before I pull away.",
    "I stare into the void. Quietly praying that I'd grab something.",
    "I reach one more time, desperate I'd grab something. Suddenly—",
    "My fingers brush against something with ridges.",
    "I pick it up and feel a switch; was it my flashlight?", */
    "In the darkness, it has to count for something...",
    "right?"
];

const ivePLayedTheseGamesBefore = [
    "The room gets darker and darker.",
    ".. I lie down and stare into the void",
    "Before my hand picked something up with ridges.",
    "... How did I know it was there?",
    "Whatever. It's something."
]

let hasinteracted = false; // for music

async function ballsucker() {
    const stopFlashingme = document.getElementById("overlay"); // just incase okay
 for (let sentence of tr ) {
        el.innerText = "";
        for (let char of sentence) {
            el.innerHTML += char;
            await new Promise(r => setTimeout(r, 50)); // i think this is the uhm, text.
        }
        if (tr.indexOf(sentence) !== tr.length - 1) {
            await new Promise(r => setTimeout(r, 1500)); // pauses.
        } 
    }

    const isPLaying = !sound.paused;

    if (!isPLaying && !hasinteracted) {
        await new Promise(r => setTimeout(r, 1500));
        const overlay = document.getElementById("ov-flash");
        overlay.style.display = "flex";

        await new Promise(resolve => {
            overlay.addEventListener('click', () => {
                overlay.style.display = "block";
                hasinteracted = true;
                resolve();
            }, { once: true });
        });

        console.log("overlay clicked, continuing.")
        overlay.style.display = "none";
    } else {
        console.log("skipping because like, yk, its already playing wtv")
        overlay.style.display = "none";
        hasinteracted = true;
    }

    await new Promise(r => setTimeout(r, 1500));
    balls(aud, false);
    document.getElementById("MOMMY-MOMMY").style.display = "none";
    document.getElementById("stinkier").style.display = "block";
    stopFlashingme.style.display = "block";

    window.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });
}
ballsucker();

// main page
