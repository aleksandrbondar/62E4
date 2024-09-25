import loadData from '../utils/loadData.mjs'
import jwt from 'jsonwebtoken'

const secretKey = 'secretkey'

const getLoginHandler = (req, res) => {
  res.render('login', { theme: req.cookies.theme ?? 'light' })
}

const postLoginHandler = async (req, res) => {
  const { username, password } = req.body

  try {
    const users = await loadData("users");

    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex === -1) {
      res.render('login', { theme: req.cookies.theme ?? 'light', error: 'User is does not exist. You need to register first!', isNeedToReg: true });
    } else {
      if (users[userIndex].password === password) {

        const payload = {
          userId: users[userIndex].id,
          username: users[userIndex].username
        }
        const token = jwt.sign(payload, secretKey, { algorithm: 'HS512', expiresIn: '1d' });
        res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
        res.redirect('/');
      } else {
        res.render('login', { theme: req.cookies.theme ?? 'light', error: 'Wrong username or password' });
      }
    }
  } catch (err) {
    console.error('Error loading users:', err);
    res.status(500).send('Internal Server Error');
  }
}

export { getLoginHandler, postLoginHandler }