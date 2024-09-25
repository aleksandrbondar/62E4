import { Router } from 'express'
import {
  getArticlesHandler,
  postArticlesHandler,
  getArticlesByPageHandler
} from '../controllers/articles.mjs'

const articlesRouter = Router()

articlesRouter.route('/').get(getArticlesHandler).post(postArticlesHandler)
articlesRouter.route('/:page').get(getArticlesByPageHandler)

export default articlesRouter
