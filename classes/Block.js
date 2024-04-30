import crypto from 'crypto';

class Block {
    constructor(transactions, prevHash) {
        this.timestamp = Date.now();
        this.transactions = transactions;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = this.calcHash();
    }

    calcHash = () => {
        const hash = crypto
            .createHash('sha256')
            .update(this.prevHash + this.timestamp + this.nonce + JSON.stringify(this.transactions))
            .digest("hex");
        return hash;
    }

    mine(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calcHash();
        }
    }
}

export default Block;
