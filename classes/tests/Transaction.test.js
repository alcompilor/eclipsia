import {describe, expect, it, beforeAll} from "vitest";
import Transaction from "../Transaction.js";

describe("Block.js Unit Tests", () => {
    let tx;
    beforeAll(() => {
        tx = new Transaction("0xCCC", "0xTEST", "Hello World");
    });

    it("Should have timestamp", () => {
        expect(tx.timestamp).toBeDefined();
        expect(tx.timestamp).toBeTypeOf("number");
    });

    it("Should have a sender", () => {
        expect(tx.sender).toEqual("0xCCC");
    });

    it("Should have a reciever", () => {
        expect(tx.reciever).toEqual("0xTEST");
    });

    it("Should contain a payload", () => {
        expect(tx.payload).toEqual("Hello World");
    });

    it("Should have a hash", () => {
        expect(tx.hash).toBeDefined();
        expect(tx.hash).toBeTypeOf("string")
    });

    it("Should stringify objects when used as payload", () => {
        tx = new Transaction("x", "x", [{hello: "world"}])
        expect(tx.payload).toEqual('[{"hello":"world"}]');
    });
});