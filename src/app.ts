/**
 * This class is the main component of the Hangman game. It contains all the
 * nessesary functionality to play a game of Hangman. It requirese three HTML
 * elements in the DOM:
 * 
 * <div id="letters"/> where all the tried, but unused letters are shown
 * <div id="attempt"/> where the amount of attempts left is shown
 * <div id="keyboard"/> where the clickable keys will appear
 * 
 */
class Hangman {

  /**
   * Holds an array of single character strings that represent the word to be
   * guessed by the player/user.
   */
  private word: string[];

  /**
   * Holds a reference to the HTML div element in the DOM where where the 
   * amount of attempts left is shown.
   */
  // TODO move to local const in writeWordToTheDOM
  private lettersInDOM: HTMLDivElement = document.querySelector("#letters");

  /**
   * Holds a reference to the HTML div element where the word will appear 
   * during the game and starts off with a string of underscores.
   */
  // TODO move to local const in writeAttemptToTheDOM()
  private attemptInDOM: HTMLDivElement = document.querySelector("#attempt");

  /**
   * Holds the amount of wrong attemps left in this game.
   */
  private attempts: number = 5;

  /**
   * The constructor is called when a new object is created. When creating the
   * object, it accepts one parameter. This is the word that is to be guessed 
   * by the player/user.
   * 
   * @param word the word that must be guessed by the player/user.
   */
  constructor(word: string) {
    this.createKeyboardInTheDom();
    this.word = word.split("");
    this.writeAttemptToTheDOM();
  }

  // TODO need to know where this method should be used.
  public gameLoop() {}

  /**
   * Event handler method that is called each time the user clicks on the
   * #keyboard div.
   * 
   * @param e the KeyboardEvent
   */
  private guessLetter(e: Event) {
    // TODO check to see if this needs to be an arrow function
    const target = e.target as HTMLElement;
    //console.log(target.className);
    if (target.className == "key") {
      console.log(target.id);
    }
  }

  /**
   * Writes the currently left attempts in the #attempt div.
   */
  private writeAttemptToTheDOM() {
    this.attemptInDOM.innerHTML = String(this.attempts);
  }

  // TODO add TypeDoc comments here
  private CheckLetter(letter: string) {
    //on what index is the letter
  }

  // TODO add TypeDoc comments here
  private showLetter() {
  }

  // TODO add TypeDoc comments here
  private winner() {}

  // TODO add TypeDoc comments here
  private writeWordToTheDOM() {}

  /**
   * Creates the div-elements for the keys of the keyboard in the DOM.
   */
  private createKeyboardInTheDom() {
    // TODO make it more readable here
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
} // End of the class definition

/**
 * Attach an event listener to the window-load event that creates a new object
 * of the Hangman class. The event listener is used to avoid creating the 
 * object BEFORE the DOM is fully loaded and all HTML-elements are known in the 
 * DOM.
 */
window.addEventListener("load", function() {
  let game = new Hangman("Jamstack");
});
