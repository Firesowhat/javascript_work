// Step 1: Create arrays to store words
var nouns = ["dog", "teacher", "car", "city"];
var verbs = ["run", "jump", "drive", "dance"];
var adjectives = ["funny", "lazy", "bright", "angry"];
var places = ["school", "park", "beach", "market"];

// Step 2: Choose words using bracket notation & indexing
var noun = nouns[1];          // "teacher"
var verb = verbs[3];          // "dance"
var adjective = adjectives[0]; // "funny"
var place = places[2];        // "beach"

// Step 3: Create the Mad Libs story using strings and concatenation
var story =
  "The " + adjective + " " + noun +
  " decided to " + verb +
  " at the " + place + ".";

// Step 4: Display the result
console.log(story);
