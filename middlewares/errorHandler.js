import { logError } from "../utils/logError.js";

export const errorHandler = (err, req, res, _) => {
    logError(req, err);
    res.status(err.statusCode).send(err.message);
};