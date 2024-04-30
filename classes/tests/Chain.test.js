import {describe, expect, it, beforeAll} from "vitest";
import Chain from "../Chain.js";
import Block from "../Block.js";
import Transaction from "../Transaction.js";

describe("Block.js Unit Tests", () => {
    let chain;
    beforeAll(() => {
        chain = new Chain(4);
    });

    it("Should init a genesis block", () => {
        expect(chain.blocks).toHaveLength(1);
        expect(chain.blocks[0]).toBeDefined();
        expect(chain.blocks[0]).toBeInstanceOf(Block);
    });

    it("Should have a difficulty for mining", () => {
        expect(chain.difficulty).toEqual(4);
    });

    it("Should insert a block", () => {
        chain.insertBlock([new Transaction("x", "x", "testing")], "0x0");
        expect(chain.blocks).toHaveLength(2);
    });

    it("Should get latest block", () => {
        expect(chain.lastBlock().transactions[0].payload).toEqual("testing");
    });
});