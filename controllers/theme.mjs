const setThemeHandler = (req, res) => {
  const { theme } = req.params;
  res.cookie('theme', theme, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
  res.end()
}

export { setThemeHandler }