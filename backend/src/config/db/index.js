// import mysql from 'mysql2/promise'
import { Sequelize } from 'sequelize'

// async function connectToDb() {
//   try {
//     const dbConnection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'ericudemy'
//     })
//     console.log('Connected to database successfully!')
//     return dbConnection
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

// export default await connectToDb()

const sequelize = new Sequelize('ericudemy', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
})

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully!')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default { connect }