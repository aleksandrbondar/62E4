import { Router } from 'express'
import {
  deleteUserByIdHandler,
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler
} from '../controllers/users.mjs'

const usersRouter = Router()

usersRouter.route('/')
  .get(getUsersHandler)
  .post(postUsersHandler)

usersRouter
  .route('/:userId')
  .get(getUserByIdHandler)
  .put(putUserByIdHandler)
  .delete(deleteUserByIdHandler)

export default usersRouter
