import { Router } from 'express'
import rootRouter from './root.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'
import errorHandler from '../utils/error.mjs'
import articleRouter from './article.mjs'
import themeRouter from './theme.mjs'
import loginRouter from './login.mjs'
import registerRouter from './register.mjs'
import authenticateJWT from '../controllers/authenticate.mjs'

const router = Router()

router.use('/', errorHandler, rootRouter)
router.use('/users', authenticateJWT, errorHandler, usersRouter)
router.use('/articles', authenticateJWT, errorHandler, articlesRouter)
router.use('/article', authenticateJWT, errorHandler, articleRouter)
router.use('/theme', authenticateJWT, errorHandler, themeRouter)
router.use('/login', errorHandler, loginRouter)
router.use('/registration', errorHandler, registerRouter)
router.use('*', (req, res) => res.status(404).end('Not found'))

export default router
