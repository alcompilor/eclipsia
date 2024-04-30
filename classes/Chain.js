import Block from "./Block.js";
import Transaction from "./Transaction.js";

class Chain {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.blocks = [this.initGenesisBlock()];
    }

    lastBlock = () => {
        return this.blocks[this.blocks.length - 1];
    }

    initGenesisBlock = () => {
        const genesis = new Block([new Transaction("GENESIS", "GENESIS", "Chancellor on brink of second bailout for banks - 01/03/2009")], "0000");
        genesis.mine(this.difficulty);
        return genesis;
    }

    insertBlock = (transactions) => {
        const block = new Block(transactions, this.lastBlock().hash);
        block.mine(this.difficulty);
        this.blocks.push(block);
    }
}

export default Chain;