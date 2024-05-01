import express from "express";
import { getChain } from "../controllers/chain.js";

export const chainRouter = express.Router();
chainRouter.get("/", getChain);