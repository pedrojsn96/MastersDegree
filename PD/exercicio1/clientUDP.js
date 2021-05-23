const dgram = require("dgram");
const readline = require("readline");

const client = dgram.createSocket("udp4");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

rl.addListener("line", (line) => {
  if (line === "end") return client.close();
  client.send(line, 0, line.length, 4001, "127.0.0.1");
});
