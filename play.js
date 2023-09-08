const { net, connect } = require("./client") // import net and connect from client.js
const { setupInput } = require("./input") //import setupInput from input.js

console.log("Connecting ...");
const connection = connect(); //storing connect result in connection
setupInput(connection); // passing coonection as parameter to setupInput