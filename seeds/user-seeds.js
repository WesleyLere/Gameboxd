const { User } = require('../models');

userData = [
  {
    username: "bob",
    email: "bob@email.com",
    password: "password"
  },
  {
    username: "alex",
    email: "alex@email.com",
    password: "password"
  },
  {
    username: "jest",
    email: "jest@email.com",
    password: "password"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers