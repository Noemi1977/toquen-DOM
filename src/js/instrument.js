// Aqui va el codigo del instrumento

document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll("li");
    const audioFiles = {};

    // Cargar los sonidos (Asegúrate de tener los archivos en la carpeta "sounds")
    keys.forEach(key => {
        const note = key.dataset.note;
        audioFiles[note] = new Audio(`sounds/${note}.mp3`);

        key.addEventListener("click", () => {
            playNote(note);
        });
    });

    // Función para reproducir el sonido
    function playNote(note) {
        if (audioFiles[note]) {
            audioFiles[note].currentTime = 0; // Reinicia el sonido si ya está sonando
            audioFiles[note].play();
        }
    }

    // Evento para detectar teclas del teclado
    document.addEventListener("keydown", event => {
        const keyMap = {
            "a": "C4", "w": "C#4", "s": "D4", "e": "D#4", "d": "E4",
            "f": "F4", "t": "F#4", "g": "G4", "y": "G#4", "h": "A4",
            "u": "A#4", "j": "B4", "k": "C5", "o": "C#5", "l": "D5",
            "p": "D#5", ";": "E5", "'": "F5", "]": "F#5", "\\": "G5"
        };

        const note = keyMap[event.key];
        if (note) playNote(note);
    });
});
