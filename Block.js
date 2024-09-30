const SHA256 = require('crypto-js/sha256');


class Block{
    constructor(data){
        this.data = data;
        this.previousHash = 0;
        this.nonce = 0;
        this.hash = 0;
    }

    toHash(){
        return SHA256(JSON.stringify(this.data+this.previousHash+this.nonce));
    }
}

module.exports = Block;