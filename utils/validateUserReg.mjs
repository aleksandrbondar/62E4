function validateUserReg(req, res, next) {
  const { username, password, confirmPassword } = req.body;
  if (!username || !password || !confirmPassword) {
    return res.status(400).send('Missing required fields: username and password');
  }
  next();
}

export default validateUserReg