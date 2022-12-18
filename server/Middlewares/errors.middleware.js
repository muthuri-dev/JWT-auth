//error middleware;
const notFound = (req, res, next) => {
    const error = new Error(`NotFound: ${req.originalUrl}`);
    res.status(404);
    next(error);
}


const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: error.message,
        //stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    });
    next();
}


//exporting error messages;
module.exports = {
    notFound,
    errorHandler,
}