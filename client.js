const net = require("net"); // importing net module
const { IP, PORT } = require("./constants") //importing IP and PORT from constants.js


const connect = function () {
  const conn = net.createConnection({ // Creating a network connection
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8"); //

  conn.on("connect", () => { //event listener for successifull connection
    console.log("Successfully connected to game server");
    conn.write("Name: MAT"); //sending player name to server
  });

  conn.on("data", (data) => {//event listener for received data from server
    console.log(data);
  });

  return conn;
};

module.exports = {
  net,
  connect,
}