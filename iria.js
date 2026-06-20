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
    balls(aud, false);
    document.getElementById("MOMMY-MOMMY").style.display = "none";
    document.getElementById("stinkier").style.display = "block";

    window.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });
}
ballsucker();

// main page

const iria = {
    "01": `hi, i'm iria. i'm a person from the philippines and i'm an istp 5w6 sp. <em>what the hell is that?</em> well, it's mbti and enneagram. if you don't understand it, go here (istp site) and here (enneagram site). i honestly.. just scroll on my phone all day, so if you text me, ping me, or whatever, i can respond asap (even if you don't). i use she/he pronouns and lean more toward he/him.`,
// space for my sanity.. please..
    "02": `i am genuinely fine with nsfw, slow responses, slurs (with context), spam (dont flood me), vents (though im not good at responding/giving empathetic help)
whats on the line is my age (i wont tell), calls when i dont know you personally/irl and loud noises
i am NOT okay with bigotry (transphobic, racist, whatever), manipulators, trolls, negative people (like "look at me! im so depressed! pity me!" people)`,
// space for my sanity.. please..
    "03": `i love coding, cats, science, memes, games.
i hate bugs, spam, slow internet, small talk, loud noises (though, i do care if the noise is silly.)
in detail (likes), cats are fun. they dont obsessively want my attention and honestly, theyre fluffy beasts. science is epik too, especially psychology and chemistry (i lean more about psychology). seriously, learning about humans are so cool??? and games, if my laptop wasnt a shitty 2017 laptop i did an ssd transplant on, id play games on this alll dayyy... but it heats up so bad it makes the battery complain when i play minecraft for like ~18 minutes so yeah.
in detail (hates), bugs piss me off. the feeling when they get on your skin when you least expect it? oh my god. spam.. i know i said im fine with spam in my boundaries but it gets to a point. if you spam me 60 images of the same thing or just random keywords, please stop. slow internet is like, self-explanatory, im always on the internet. small talk is kind of awkward in my opinion, and in the digital world where everything wants your attention... well, that makes it weirder. loud noises are fine, if i find it funny and im alone i wont get mad`,
// space for my sanity please..
    "04": `i keysmash my keyboard (dpsa-r[3l2t;gfgbk) when im confused or something, its mostly a fallback when i cant type "what do you mean??" i also spam 😼 (cat with a wry smile) because it looks silly. kill me.`
};