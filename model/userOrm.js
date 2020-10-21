const { findAllUsers } = require('./userQueries.js');
const connection = require('../config/connection.js');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  fetchUsers,
};
