const Blockchain = require("./Blockchain");
const Block = require("./Block")

const bitcoin = new Blockchain();
bitcoin.addBlock(new Block("Bob sends 2 BTC to Alice."));
bitcoin.addBlock(new Block("Joe sends 10 BTC to Bob."));

bitcoin.showBlockchain();