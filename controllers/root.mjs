const getRootHandler = (req, res) => {
  const theme = req.cookies.theme
  res.render('index', { theme: theme ?? 'light' })
}

export { getRootHandler }
