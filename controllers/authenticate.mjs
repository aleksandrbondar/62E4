import jwt from 'jsonwebtoken'
import loadData from '../utils/loadData.mjs'

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token

  if (token) {
    jwt.verify(token, 'secretkey', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Not authorized' })
      }
      next()
    })
  } else {
    res.status(401).redirect('/login')
  }
}

export default authenticateJWT