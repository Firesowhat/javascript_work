// PLAYER OBJECT (key-value pairs)
var player = {
  name: "Player",
  location: "room",
  hasKey: false,
  score: 0
};

// FUNCTION TO DESCRIBE LOCATION
function describeLocation() {
  if (player.location === "room") {
    console.log("You are in a room. There is a key on the table.");
  } else if (player.location === "hall") {
    console.log("You are in the hall. There is a treasure chest here.");
  } else {
    console.log("Unknown location.");
  }
}

// FUNCTION TO PICK UP KEY
function pickKey() {
  if (player.location === "room" && player.hasKey === false) {
    player.hasKey = true; // dot notation
    player.score = player.score + 10;
    console.log("You picked up the key!");
  } else {
    console.log("There is no key here.");
  }
}

// FUNCTION TO MOVE PLAYER
function movePlayer() {
  if (player.location === "room") {
    player.location = "hall";
    console.log("You moved to the hall.");
  } else {
    console.log("You cannot move further.");
  }
}

// FUNCTION TO OPEN TREASURE
function openTreasure() {
  if (player.location === "hall" && player["hasKey"] === true) {
    // bracket notation used here
    console.log("🎉 You opened the treasure! You win!");
    player.score = player.score + 50;
  } else if (player.location === "hall" && player.hasKey === false) {
    console.log("You need a key to open the treasure.");
  } else {
    console.log("There is no treasure here.");
  }
}

// MAIN GAME FUNCTION USING SWITCH
function gameAction(action) {
  switch (action) {
    case "look":
      describeLocation();
      break;

    case "take":
      pickKey();
      break;

    case "move":
      movePlayer();
      break;

    case "open":
      openTreasure();
      break;

    default:
      console.log("Invalid action.");
  }
}

// START GAME
console.log("Welcome to Treasure Hunt!");
describeLocation();
gameAction("look");
gameAction("take");
gameAction("move");
gameAction("look");
gameAction("open");
