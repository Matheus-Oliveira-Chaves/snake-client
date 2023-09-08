let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // Check for Ctrl + C
    console.log("Exiting the game.");
    process.exit();
  } else if (key === 'w') { // 'w' key
    console.log("Move: up");
    connection.write("Move: up")
   
  } else if (key === 'a') { // 'a' key
    console.log("Move: left");
    connection.write("Move: left")
  } else if (key === 's') { // 's' key
    console.log("Move: down");
    connection.write("Move: down")
  } else if (key === 'd') { // 'd' key
    console.log("Move: right");
    connection.write("Move: right")
  }
}


module.exports = {
  setupInput,
}