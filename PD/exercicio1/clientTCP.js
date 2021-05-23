const net = require("net");
const readline = require("readline");

const client = new net.Socket();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

client.connect("4000", "127.0.0.1", () => {
  console.log("Cliente conectado");
  rl.addListener("line", (line) => {
    client.write(line);
  });
});
