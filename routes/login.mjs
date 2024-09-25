import { Router } from 'express'
import { getLoginHandler, postLoginHandler } from '../controllers/login.mjs'
import validateUserLogin from '../utils/validateUserLogin.mjs'

const loginRouter = Router()

loginRouter.route('/')
  .get(getLoginHandler)
  .post(validateUserLogin, postLoginHandler)

export default loginRouter