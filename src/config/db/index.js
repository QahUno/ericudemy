import mysql from 'mysql2/promise'

async function connectToDb() {
  try {
    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'ericudemy'
    })
    console.log('Connected to database successfully!')
    return dbConnection
  }
  catch (err) {
    console.log(err)
  }
}

export default await connectToDb()