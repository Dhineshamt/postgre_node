const { Pool, Client } = require("pg");

// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb';

const connectionString = "postgresql://postgres:1234@localhost:5432/testdb";
// url: https://node-postgres.com/features/connecting
const client = new Client(
  { connectionString }
  // user: 'postgres',
  // host: 'localhost',
  // database: 'testdb',
  // password: '1234',
  // port: 5432,
);

// client.connect()
// client.query('SELECT * FROM COMPANY', (err, res) => {
//   console.log(res);
//   // if(err) {
//   //   console.error("Error triggered");
//   // }
//   client.end()
// })

// const runQuery = {
//   name: "Insert",
//   text: "INSERT INTO COMPANY VALUES($1, $2, $3, $4, $5)",
//   values: [6, "Dhinesh", 29, "NC", 5000],
// };
// client.connect();
// client.query(runQuery, (err, res) => {
//   console.log("Result:", res, "Error: ", err );
//   client.end();
// });

const delQuery = {
  name: "Delete",
  text: "DELETE FROM COMPANY WHERE id=6"
}

client.connect();

client.query(delQuery, (err, res) => {
  console.log(err, res);
  client.end();
});

// client.connect()
// client.query('SELECT * FROM COMPANY', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// client.query('DELETE FROM COMPANY WHERE id=1', (err, res) => {
//   console.log(err, res);
//   client.end();
// })
