

// // ---------------------------------------------
// Insertions des boutons dans le html XYLO
// // ---------------------------------------------

// const body = document.body;
let xyloClass = document.querySelector(".xylo");
// Tableau des notes
let tableauNote = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "A2", "B2", "C2", "D2", "E2", "F2", "G2"];

// Mapper les notes à des touches spécifiques du clavier
const keyboardNoteMap = {
    "a": "A1",
    "z": "B1",
    "e": "C1",
    "r": "D1",
    "t": "E1",
    "y": "F1",
    "u": "G1",
    "q": "A2",
    "s": "B2",
    "d": "C2",
    "f": "D2",
    "g": "E2",
    "h": "F2",
    "j": "G2"
};


for (let note of tableauNote) {
    let buttonNote = document.createElement("button");
    buttonNote.textContent = note;
    buttonNote.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        new Audio(`Mallet Note/Mallet ${note}.wav`).play()
        
    })
    // Création de la classe avec la première lettre de la note
    let lettre = note.split("");
    console.log(lettre[0]);
    buttonNote.classList.add(`${lettre[0]}`)

    xyloClass.append(buttonNote); // Inserer les boutons dans le body
}

document.addEventListener("keydown", function (e) {
    const pressedKey = e.key.toLowerCase(); // Convertir la touche pressée en minuscule pour la correspondance

    // Vérifier si la touche pressée est dans notre mapping
    if (keyboardNoteMap[pressedKey]) {
        const noteToPlay = keyboardNoteMap[pressedKey];
        console.log(`Touche pressée : ${pressedKey}, Joue : ${noteToPlay}`);
        new Audio(`Mallet Note/Mallet ${noteToPlay}.wav`).play();
    }
});

// // ---------------------------------------------
// Insertions des boutons dans le html BASS
// // ---------------------------------------------


let bassClass = document.querySelector(".bass");
// Tableau des notes
let tableauNoteBass = ["A", "B", "C", "D", "E", "F", "G", "A#", "C#", "D#", "E2", "F#", "G#"];

// Mapper les notes à des touches spécifiques du clavier
const keyboardNoteMapBass = {
    "a": "A",
    "z": "B",
    "e": "C",
    "r": "D",
    "t": "E",
    "y": "F",
    "u": "G",
    "q": "A#",
    "d": "C#",
    "f": "D#",
    "g": "E2",
    "h": "F#",
    "j": "G#"
};


for (let noteBass of tableauNoteBass) {
    let buttonNoteBass = document.createElement("button");
    buttonNoteBass.textContent = noteBass;
    buttonNoteBass.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        new Audio(`Bass Note/${noteBass}.wav`).play()
        
    })
    // Création de la classe avec la première lettre de la note
    let lettreBass = noteBass.split("");
    console.log(lettreBass[0]);
    buttonNoteBass.classList.add(`${lettreBass[0]}`)

    bassClass.append(buttonNoteBass); // Inserer les boutons dans le body
}

document.addEventListener("keydown", function (e) {
    const pressedKeyBass = e.key.toLowerCase(); // Convertir la touche pressée en minuscule pour la correspondance

    // Vérifier si la touche pressée est dans notre mapping
    if (keyboardNoteMapBass[pressedKeyBass]) {
        const noteToPlayBass = keyboardNoteMapBass[pressedKeyBass];
        console.log(`Touche pressée : ${pressedKeyBass}, Joue : ${noteToPlayBass}`);
        new Audio(`Mallet Note/Mallet ${noteToPlayBass}.wav`).play();
    }
});

// // ---------------------------------------------
// ajouter ou supprimer une Div
// // ---------------------------------------------

let xylo = document.querySelector("#xylo");
xylo.addEventListener("click", function () {
    xyloClass.classList.toggle("cachee");

  })