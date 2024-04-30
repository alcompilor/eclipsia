import {describe, expect, it, beforeAll} from "vitest";
import Transaction from "../Transaction.js";
import Block from "../Block.js";

describe("Block.js Unit Tests", () => {
    let block;
    beforeAll(() => {
        block = new Block([new Transaction("x", "x", "Hello")], "9999");
    });

    it("Should have timestamp", () => {
        expect(block.timestamp).toBeDefined();
        expect(block.timestamp).toBeTypeOf("number");
    });

    it("Should have a prevHash", () => {
        expect(block.prevHash).toEqual("9999");
    });

    it("Should contain a transaction", () => {
        expect(block.transactions[0]).toBeInstanceOf(Transaction);
    });

    it("Should use PoW to mine block", () => {
        block.mine(4);
        expect(block.hash).toMatch(/^0000/);
    });
});