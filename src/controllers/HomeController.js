class HomeController {
  // [GET] /
  index(req, res) {
    res.render('home', { title: 'Homepage' })
  }

  // [GET] /about
  about(req, res) {
    res.render('about', { title: 'About me' })
  }
}

export default new HomeController()