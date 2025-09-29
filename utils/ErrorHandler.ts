class ErrorHandler extends Error {
    statusCode: Number;
    constructor(messag: any, statusCode: Number) {
        super(messag);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor)
    }
}

export default ErrorHandler;
