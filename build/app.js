function init() {
    let Game = new Hangman("Jamstack");
}
class Hangman {
    constructor(word) {
        this.lettersInDOM = document.querySelector("#letters");
        this.attemptInDOM = document.querySelector("#attempt");
        this.attempts = 5;
        this.writeAlphabetToTheDom();
        this.word = word.split("");
        this.writeAttemptToTheDOM();
    }
    gameLoop() { }
    guessLetter(e) {
        const target = e.target;
        if (target.className == "key") {
            console.log(target.id);
        }
    }
    writeAttemptToTheDOM() {
        this.attemptInDOM.innerHTML = String(this.attempts);
    }
    CheckLetter(letter) {
    }
    showLetter() {
    }
    winner() { }
    writeWordToTheDOM() { }
    writeAlphabetToTheDom() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        const keyboard = document.querySelector("#keyboard");
        keyboard.addEventListener("click", this.guessLetter);
        alphabet.forEach(function (element, index) {
            let divKey = document.createElement("div");
            divKey.id = element;
            divKey.classList.add("key");
            divKey.innerHTML = element;
            keyboard.append(divKey);
        });
    }
}
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map