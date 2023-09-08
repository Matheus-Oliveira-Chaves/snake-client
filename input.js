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
    connection.write("Move: up")
   
  } else if (key === 'a') { // 'a' key
    connection.write("Move: left")
  } else if (key === 's') { // 's' key
    connection.write("Move: down")
  } else if (key === 'd') { // 'd' key
    connection.write("Move: right")
  }else if (key === 'b') { // 'b' key
    connection.write("Say: BrInG iT oN!!!");
  }else if (key === 'l') { // 'l' key
    connection.write("Say: let`s gooooo!!!");
  }
}


module.exports = {
  setupInput,
}