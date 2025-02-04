const pianoKeys = document.querySelectorAll(".piano-keys .key");
let allKeys = [];
const keyState = {};

const playTune = (key) => {
    if (keyState[key]) return; 

    const audio = new Audio(`tunes/${key}.wav`);
    audio.play();

    keyState[key] = true;

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");


    audio.addEventListener("ended", () => {
        clickedKey.classList.remove("active");
        keyState[key] = false;
    });
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
    if (e.repeat) return; 
    if (allKeys.includes(e.key)) playTune(e.key);
};

const releasedKey = (e) => {
    if (allKeys.includes(e.key)) {
        keyState[e.key] = false;
    }
};

document.addEventListener("keydown", pressedKey);
document.addEventListener("keyup", releasedKey);