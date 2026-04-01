export default function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      status: err.status || "error",
      message: err.message
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
}