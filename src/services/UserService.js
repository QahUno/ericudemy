import bcrypt from 'bcrypt'
import dbConnection from '../config/db/index.js'

class UserService {
  async createNewUser(email, username, password) {
    const hashedPassword = await bcrypt.hash(password, 10)
    // const isPasswordMatched = await bcrypt.compare(password, hashedPassword)

    try {
      await dbConnection.execute(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hashedPassword]
      )
    }
    catch (err) {
      console.log(err)
    }
  }

  async getListOfUsers() {
    try {
      const [users] = await dbConnection.execute('SELECT * FROM users')
      return users
    }
    catch (err) {
      console.log(err)
    }
  }

  async getUserById(id) {
    try {
      const [users] = await dbConnection.execute('SELECT * FROM users WHERE id = ?', [id])
      return users[0]
    }
    catch (err) {
      console.log(err)
    }
  }

  async deleteUserById(id) {
    try {
      await dbConnection.execute('DELETE FROM users WHERE id = ?', [id])
    }
    catch (err) {
      console.log(err)
    }
  }

  async updateUserById(id, data) {
    try {
      const { email, username } = data
      await dbConnection.execute('UPDATE users SET email = ?, username = ? WHERE id = ?', [email, username, id])
    }
    catch (err) {
      console.log(err)
    }
  }
}

export default new UserService()