import express from "express";
import { insertTransaction } from "../controllers/transaction.js";

export const transactionsRouter = express.Router();
transactionsRouter.post("/", insertTransaction);