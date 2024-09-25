import { Router } from 'express'
import { setThemeHandler } from '../controllers/theme.mjs'

const themeRouter = Router()

themeRouter.route('/:theme').get(setThemeHandler)

export default themeRouter