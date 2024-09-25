import { Router } from 'express'
import {
  deleteArticleByIdHandler,
  getArticleByIdHandler,
  putArticleByIdHandler,
} from '../controllers/articles.mjs'

const articleRouter = Router()

articleRouter
  .route('/:articleId')
  .get(getArticleByIdHandler)
  .put(putArticleByIdHandler)
  .delete(deleteArticleByIdHandler)

export default articleRouter
