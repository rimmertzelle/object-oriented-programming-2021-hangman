function init() {
  let Game = new Hangman("Jamstack");
}

class Hangman {
  private word: string[];
  private lettersInDOM: HTMLDivElement = document.querySelector("#letters");
  private attemptInDOM: HTMLDivElement = document.querySelector("#attempt");
  private attempts: number = 5;

  constructor(word: string) {
    this.writeAlphabetToTheDom();
    this.word = word.split("");
    this.writeAttemptToTheDOM();
  }

  public gameLoop() {}

  private guessLetter(e: Event) {
    const target = e.target as HTMLElement;
    //console.log(target.className);
    if (target.className == "key") {
      console.log(target.id);
    }
  }

  private writeAttemptToTheDOM() {
    this.attemptInDOM.innerHTML = String(this.attempts);
  }

  private CheckLetter(letter: string) {
    //on what index is the letter
  }

  private showLetter() {
  }

  private winner() {}

  private writeWordToTheDOM() {}

  private writeAlphabetToTheDom() {
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
