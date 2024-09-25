function errorHandler(req, res, next) {
  if (res.statusCode !== 200) {
    res.status(res.statusCode || 500).end(`Error: ${res.statusCode}. ${res.statusMessage || 'Unknown server error'}.`);
  }
  next();
}

export default errorHandler