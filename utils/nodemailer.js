const nodemailer = require("nodemailer");

module.exports = {
  welcome: async function(email, username) {
    let transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: 'gameboxd@outlook.com',
        pass: '%n/RbR6HKr?w7dC',
      },
    });
    // Lowercase username then capitalize the first letter
    const usernameLower = username.toLowerCase();
    const prettierUsername = usernameLower[0].toUpperCase() + usernameLower.slice(1);

    const options = {
      from: 'gameboxd@outlook.com',
      to: `${email}`,
      subject: 'Welcome to Gameboxd',
      html: `<h1>Welcome to Gameboxd ${prettierUsername}</h1>
      <p> Click <a href='https://gamebox.herokuapp.com/profile'>here</a> to login and go to your profile</p>`,
    };
    const info = await transporter.sendMail(options, (err, info) => {
      if(err) {
        console.log(err);
        return;
      }
      console.log(info.response);
    })
  }
}
