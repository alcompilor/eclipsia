import { eclipsia } from "../rpc.js"
import ErrorResponse from "../utils/ErrorResponse.js";

export const getChain = (_, res, next) => {
    try {
        res.status(200).json(eclipsia);
    } catch {
        next(new ErrorResponse("Internal Server Error", 500));
    }
}