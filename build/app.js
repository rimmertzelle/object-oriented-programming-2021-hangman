class Hangman {
    constructor(word) {
        this.lettersInDOM = document.querySelector("#letters");
        this.attemptInDOM = document.querySelector("#attempt");
        this.attempts = 5;
        this.createKeyboardInTheDom();
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
    createKeyboardInTheDom() {
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
window.addEventListener("load", function () {
    let game = new Hangman("Jamstack");
});
//# sourceMappingURL=app.js.map