class Response {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
        this.success = String(statusCode).startsWith("2");
    }
}

export default Response;