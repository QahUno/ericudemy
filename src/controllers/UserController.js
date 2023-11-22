import userService from "../services/UserService.js"

class UserController {
  //[GET] /users
  async index(req, res) {
    const users = await userService.getListOfUsers()
    res.render('user', { title: 'User management', users })
  }

  // [POST] /users/create
  async create(req, res) {
    const { email, username, password } = req.body
    await userService.createNewUser(email, username, password)
    res.status(201).redirect('back')
  }

  // [DELETE] /users/delete/:id
  async delete(req, res) {
    await userService.deleteUserById(req.params.id)
    res.redirect('back')
  }

  // [GET] /users/editPage/:id
  async editPage(req, res) {
    const user = await userService.getUserById(req.params.id)
    res.render('edit', { title: 'Edit Page', user })
  }

  // [PUT] /users/edit/:id
  async edit(req, res) {
    await userService.updateUserById(req.params.id, req.body)
    res.redirect('/users')
  }
}

export default new UserController()