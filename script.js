// // ---------------------------------------------
// Insertions des boutons dans le html
// // ---------------------------------------------

const body = document.body;
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
    "q": "A1",
    "s": "B1",
    "d": "C1",
    "f": "D1",
    "g": "E1",
    "h": "F1",
    "j": "G1"
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

    body.append(buttonNote); // Inserer les boutons dans le body
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