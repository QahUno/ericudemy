import bcrypt from 'bcrypt'
import db from '../db/models'

class UserService {
  async getListOfUsers() {
    try {
      const users = await db.User.findAll({ attributes: ['id', 'email', 'username'] })
      return users
    }
    catch (err) {
      console.log(err)
    }
  }

  async createNewUser(email, username, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      // const isPasswordMatched = await bcrypt.compare(password, hashedPassword)
      await db.User.create({
        email,
        username,
        password: hashedPassword
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async getUserById(id) {
    try {
      const user = await db.User.findOne({ where: { id } })
      return user
    }
    catch (err) {
      console.log(err)
    }
  }

  async deleteUserById(id) {
    try {
      await db.User.destroy({ where: { id } })
    }
    catch (err) {
      console.log(err)
    }
  }

  async updateUserById(id, data) {
    try {
      const { email, username } = data
      await db.User.update({ email, username }, { where: { id } })
    }
    catch (err) {
      console.log(err)
    }
  }
}

export default new UserService()