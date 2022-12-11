const { User } = require('../models');

userData [{
    username: "bob",
    email: "bob@email.com",
    password: "password"
}]

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers