import { eclipsia } from "../rpc.js";
import Transaction from "../classes/Transaction.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Response from "../utils/Response.js";

export const insertTransaction = (req, res, next) => {
    try {
        const { sender, reciever, payload } = req.body;

        if (!sender) {
            return next(new ErrorResponse("Missing sender field", 400));
        } else if (!reciever) {
            return next(new ErrorResponse("Missing receiver field", 400));
        } else if (!payload) {
            return next(new ErrorResponse("Missing payload field", 400));
        }

        const transaction = new Transaction(sender, reciever, payload);
        const timeSinceLastBlock = eclipsia.timeSinceLastBlock();

        if (timeSinceLastBlock >= eclipsia.newBlockInterval) {
            eclipsia.insertBlock([transaction]);
        } else {
            eclipsia.lastBlock().transactions.push(transaction);
        }

        res.status(200).json(new Response("Transaction has been added", 200));
    } catch {
        next(new ErrorResponse("Internal Server Error", 500));
    }
}