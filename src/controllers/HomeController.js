class HomeController {
  index(req, res) {
    res.render('home', { title: 'Homepage' })
  }

  about(req, res) {
    res.render('about', { title: 'About me' })
  }

  user(req, res) {
    res.render('user')
  }
}

export default new HomeController()