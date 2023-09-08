

const handleUserInput = function (key) {
  if (key === '\u0003') { // Check for Ctrl + C 
    console.log("Exiting the game.");
    process.exit();
  } else if (key === '\u001B[A') { // Up arrow key
    console.log("Up arrow key pressed");
    // Handle up arrow action here
  } else if (key === '\u001B[B') { // Down arrow key
    console.log("Down arrow key pressed");
    // Handle down arrow action here
  } else if (key === '\u001B[C') { // Right arrow key
    console.log("Right arrow key pressed");
    // Handle right arrow action here
  } else if (key === '\u001B[D') { // Left arrow key
    console.log("Left arrow key pressed");
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  setupInput,
}