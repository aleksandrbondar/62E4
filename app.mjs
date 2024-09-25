import express from 'express'
import router from './routes/index.mjs'
import logRequests from './utils/logger.mjs'
import cookieParser from 'cookie-parser'

const PORT = 3000
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug');
app.set('views', './views');

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequests);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
