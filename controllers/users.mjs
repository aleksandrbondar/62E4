import users from './../data/users.json' assert { type: 'json' };
const getUsersHandler = (req, res) => {
  const theme = req.cookies.theme
  res.render('users', { users, theme: theme ?? 'light' });
}

const postUsersHandler = (req, res) => {
  res.send('POST users route')
}

const getUserByIdHandler = (req, res) => {
  const { userId } = req.params
  const theme = req.cookies.theme
  res.render('userById', { user: users[userId - 1], theme: theme ?? 'light' })
}

const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`DELETE user by id: ${userId}`)
}

const putUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`PUT user by id route with id: ${userId}`)
}

export { getUsersHandler, postUsersHandler, getUserByIdHandler, deleteUserByIdHandler, putUserByIdHandler }
