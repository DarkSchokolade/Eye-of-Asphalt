// Custom middleware

// For url routes which are not defined
const notFound = (req, res, next) => {
  const error = new Error(`Oops!! Not Found ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// for custom error message
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
