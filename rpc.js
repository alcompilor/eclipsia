import express from "express";
import helmet from "helmet";
import { logger } from "./middlewares/logger.js";
import { loadChain } from "./utils/loadChain.js";
import { persistChain } from "./utils/persistChain.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { transactionsRouter } from "./routers/transaction.js";
import { chainRouter } from "./routers/chain.js";

const PORT = 7185;
const rpc = express();
export let eclipsia;

// Assign necassary middlewares
rpc.use(express.json());
rpc.use(express.urlencoded({ extended: true }));
rpc.use(helmet());
rpc.use(logger);

// Routes
rpc.use("/v1/transaction", transactionsRouter);
rpc.use("/v1/chain", chainRouter);

// Error handling (must be last)
rpc.use(errorHandler);

rpc.listen(PORT, (err) => {
    err ? console.log("Failed to run RPC") : console.log("RPC is up and running..\n");
    eclipsia = loadChain();
});

process.on("SIGINT", () => {
    persistChain(eclipsia);
    process.exit(0);
});