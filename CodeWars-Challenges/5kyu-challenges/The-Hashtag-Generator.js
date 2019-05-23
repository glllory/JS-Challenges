// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//solution:
function generateHashtag(str) {
    let capitalized = str.replace(/(^|\s)[a-z]/g, function (i) { return i.toUpperCase(); });
    let solution = capitalized.split(" ").join("");

    if (solution.length > 0 && solution.length < 140) {
        return "#" + solution;

    } else {
        return false;
    }

}
generateHashtag("     ");
generateHashtag("Do We have A Hashtag");
generateHashtag("Codewars");
generateHashtag("Codewars Is Nice");
generateHashtag("code" + " ".repeat(140) + "wars");
generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
generateHashtag("a".repeat(139));
generateHashtag("a".repeat(140));