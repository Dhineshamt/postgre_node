const { Pool, Client } = require('pg')
// url: https://node-postgres.com/features/connecting
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: '1234',
    port: 5432,
  })

  client.connect()
  client.query('SELECT * FROM COMPANY', (err, res) => {
    console.log(err, res)
    client.end()
  })

  // client.connect()
  // client.query('SELECT * FROM COMPANY', (err, res) => {
  //   console.log(err, res)
  //   client.end()
  // })

// client.query('DELETE FROM COMPANY WHERE id=1', (err, res) => {
//   console.log(err, res);
//   client.end();
// })