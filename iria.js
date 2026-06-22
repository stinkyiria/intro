const sound = new Audio("./audio_idk/lg.mp3");
const poop = sound.play();
const aud = new Audio("./audio_idk/flashlight.mp3")
const fan = new Audio("./audio_idk/fannoise.mp3")
let audioPLEASEPLAY = false;

sound.loop = true;
sound.volume = 0;
fan.loop = true;
fan.volume = 0.2;

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

balls(fan, true);

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
    "I closed the door.",
    `"Well that was easy," I murmured, feeling around the dark room.`,
    "I crouched on the floor to hide my silhouette that was stumbling around.",
    "I brushed my hand on the floor and hit into a table leg.",
    "I stood up and felt around the table; I felt something with ridges.",
    "I picked it up.",
    "[Move your cursor to turn it on.]"
];

const ivePLayedTheseGamesBefore = [
    "I closed the door.",
    "i grab the flashlight from my pocket and walk toward the table.",
    "[Move your cursor to turn it on.]"
]

const pleaseStopvisiting = [
    "I closed the door.",
    "I grab my flashlight from my pocket and walk toward the table.",
    `"Who's this.. subject person.." I murmur to myself.`,
    "[Move your cursor to turn it on.]"
]

const STOPPLEASE = [
    "I grab my flashlight from my pocket and walk toward the table.",
    "I was already familiar with the layout. I knew where the light switch was anyway.",
    ".. Though, it's more interesting in the dark.",
    "[Move your cursor to turn it on.]"
]

const epik = {
    1: tr,
    2: ivePLayedTheseGamesBefore,
    4: pleaseStopvisiting,
    6: STOPPLEASE
}

let hasinteracted = false; // for music
let visitCount = localStorage.getItem("visitCount");
async function ballsucker() {
    // lstoage
    let count = parseInt(localStorage.getItem("visitCount") || "0");
    count++;
    localStorage.setItem("visitCount", count);

    const epikepik = epik[count] || tr;

    const isPLaying = !sound.paused;
    let hasStarted = false;
    if (!isPLaying) {
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

    const stopFlashingme = document.getElementById("overlay"); // just incase okay
    const showmetheLight = document.getElementById("overlay2");

  for (let sentence of epikepik ) {
        el.textContent = "";
        for (let char of sentence) {
            el.textContent += char;
            await new Promise(r => setTimeout(r, 50)); // i think this is the uhm, text.
        }
        if (tr.indexOf(sentence) !== epikepik.length - 1) {
            await new Promise(r => setTimeout(r, 1500)); // pauses.
        } 
    }

    await new Promise(r => setTimeout(r, 1500));
    document.getElementById("MOMMY-MOMMY").style.display = "none";
    showmetheLight.style.display = "block";
    document.getElementById("stinkier").style.display = "block";
    stopFlashingme.style.display = "block";

    window.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');

        if (!hasStarted) {
            hasStarted = true;
            balls(aud, false);
        }

        if (showmetheLight.style.opacity !== "0") {
            showmetheLight.classList.add('hidden');
            
            setTimeout(() => {
                showmetheLight.style.display = "none";
            }, 0.1);
        }
    });
}
ballsucker();

// main page


function musicStopper() {
    if (!sound.paused) {
        sound.pause();
        sound.currentTime = 0;
        console.log("paused");
    } else {
        balls(sound, true);
        console.log("playing");
    }
}

function gatekeeper() {
    const warning = document.getElementById("epikwarning");
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isNarrow = window.innerWidth < 1024;

    if (isMobile || isNarrow) {
        warning.style.display = "flex";
    } else {
        warning.style.display = "none";
    }
}

gatekeeper();