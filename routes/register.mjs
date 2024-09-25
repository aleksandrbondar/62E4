import { Router } from 'express'
import { getRegisterHandler, postRegisterHandler } from '../controllers/register.mjs'
import validateUserReg from '../utils/validateUserReg.mjs'


const registerRouter = Router()

registerRouter.route('/')
  .get(getRegisterHandler)
  .post(validateUserReg, postRegisterHandler)

export default registerRouter