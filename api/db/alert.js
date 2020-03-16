const db = require('./db');
const axios = require('axios');

const createNewAlert = (request, response) => {
    console.log(requst.body)

//   db
//     .connect()
//     .then(client => {
//       return client
//         .query('SELECT * FROM stand')
//         .then(res => {
//           client.release()
//           response.json(res.rows)
//         })
//         .catch(err => {
//           client.release()
//           console.log(err.stack)
//         })
//     })
}


module.exports = {
  createNewAlert: createNewAlert
};