const Block = require("./Block");
const SHA256 = require("crypto-js/sha256");

class Blockchain{
    constructor(){
        this.DIFFCULTY = BigInt(0x0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
                               //0x59f20b3e44c25ce37e7ac2ffd4140717adfdb90723772fdc57c2c1615c6d8841
        this.chain = [];
        const genesis = new Block("Genesis block!");
        genesis.hash = genesis.toHash().toString();
        while(this.DIFFCULTY < BigInt(`0x${genesis.hash}`)){
            genesis.nonce++;
            genesis.hash = genesis.toHash().toString();
        }
        this.chain.push(genesis);
    }

    addBlock(block){
        block.previousHash = this.chain[this.chain.length-1].toHash().toString();
    
        let hash = block.toHash(); 
        while(this.DIFFCULTY < BigInt(`0x${hash}`)){
            block.nonce++;
            hash = block.toHash();
        }
    
        block.hash = hash.toString();
        this.chain.push(block);
    }

    showBlockchain(){
        console.log(this.chain);
        
    }
}


module.exports = Blockchain;


