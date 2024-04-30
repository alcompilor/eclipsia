import express from "express";
import helmet from "helmet";

const PORT = 7185;
const rpc = express();

rpc.use(express.json());
rpc.use(express.urlencoded({ extended: true }));
rpc.use(helmet());

rpc.listen(PORT, (err) => {
    err ? console.log("Failed to run RPC") : console.log("RPC is up and running..")
});