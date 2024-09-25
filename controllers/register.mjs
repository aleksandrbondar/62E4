import jwt from 'jsonwebtoken';
import loadData from '../utils/loadData.mjs';
import saveData from '../utils/saveData.mjs';

const secretKey = 'secretkey';

const getRegisterHandler = (req, res) => {
  res.status(200).render('registration', { theme: req.cookies.theme ?? 'light' });
}

const postRegisterHandler = async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(201).render('registration', { theme: req.cookies.theme ?? 'light', error: 'Passwords do not match' });
  }

  try {
    const users = await loadData("users");

    const isUserExist = users.some(user => user.username === username);
    if (isUserExist) {
      return res.status(201).render('registration', { theme: req.cookies.theme ?? 'light', error: 'Username already exists' });
    }

    const newUser = {
      id: users.length + 1,
      username: username,
    };

    users.push({ ...newUser, password: password });

    await saveData("users", users);

    const token = jwt.sign({ userId: newUser.id, username: newUser.username }, secretKey, { algorithm: 'HS512', expiresIn: '1d' });

    res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

    res.redirect('/');
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Internal Server Error');
  }
}

export { getRegisterHandler, postRegisterHandler };