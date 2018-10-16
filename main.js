// Challenges are optional exercises that you can work once you've completed all the practice exercises and understand the concepts in them.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

const addExcitement = (theWordArray, symbol) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
      if (i % 3 === 0 && i > 0) {
        buildMeUp = `${buildMeUp} ${sentence[i]}${symbol}`
      } else {
        buildMeUp = `${buildMeUp} ${sentence[i]}`
      }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// // I want to use a question mark
addExcitement(sentence, "?");

// Example output:
// The
// The walrus
// The walrus danced
// The walrus danced through?
// The walrus danced through? the
// The walrus danced through? the trees
// The walrus danced through? the trees in?
// etc..
