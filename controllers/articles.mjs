import articles from './../data/articles.json' assert { type: 'json' };
const getArticlesHandler = (req, res) => {
  const theme = req.cookies.theme
  res.render('./../views-ejs/articles.ejs', { articles: articles.slice(0, 10), pages: Math.ceil(articles.length / 10), currectPage: 1, theme: theme ?? 'light' })
}

const getArticlesByPageHandler = (req, res) => {
  const { page } = req.params
  const theme = req.cookies.theme
  res.render('./../views-ejs/articles.ejs', { articles: articles.slice((page - 1) * 10, page * 10), pages: Math.ceil(articles.length / 10), currectPage: +page, theme: theme ?? 'light' })
}

const postArticlesHandler = (req, res) => {
  res.send('POST articles route')
}

const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  const theme = req.cookies.theme
  res.render('./../views-ejs/articleById.ejs', { article: articles[articleId - 1], theme: theme ?? 'light' })
}

const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`DELETE article by id: ${articleId}`)
}

const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`PUT article by id: ${articleId}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler,
  getArticlesByPageHandler
}
