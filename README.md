# Gameboxd 🎮
<br>
<img width=160, height=38 src="https://img.shields.io/badge/license-MIT-important">
<br>
<br>

## Description 📃

An web app which user can create their own account (receive a welcome email send through Nodemailer), search for games from STEAM through a [STEAM API](https://rapidapi.com/psimavel/api/steam2). Then, inside the game details page, user can view the game's thumbnail, description, other users' reviews and rating fo the game. User can also give their own rating and review on the same page and if they like the game, it can be bookmark to their profile.

Check out our GameBoxd App [here](https://gamebox.herokuapp.com/) 👈

## User Story

> AS A user who loves games  
> I WANT a game review web app  
> SO THAT I can view my favorite games' details and rating, also have my account to keep track of my favorite list.

## Screenshot 📷

Home Page

<img width=450, height=350 src="https://user-images.githubusercontent.com/82792300/207671367-5b06cb43-3ec8-4a8d-a886-7b0d7aca6688.png" alt='HomePage screenshot'>

Search Result

<img width=450, height=400 src="https://user-images.githubusercontent.com/82792300/207756235-2714b890-8367-4aec-8839-1c6ccac67087.png" alt='Search Result screenshot'>

Game Details Page

<img width=450, height=500 src="https://user-images.githubusercontent.com/82792300/207756222-05a3f201-dc08-40c8-9ca8-f494fe3bca68.png" alt='Game Details screenshot'>

Profile

<img width=500, height=350 src="https://user-images.githubusercontent.com/82792300/207756219-b01dab8e-4768-41e4-bfac-2d889ff05863.png" alt='Profile screenshot'>

## Installation 🔧

Run this command to install dependencies
```console
npm i
```
Then, use .env.EXAMPLE to set up your connection with the database.

NOTE: setup the database with the schema.sql file
## Usage 
Seeding the database:

```console
npm run seed
```
Start:

```console
npm run start
```

## Dependencies 📦

* bcrypt
* connect-session-sequelize
* dotenv
* express
* express-handlebars
* express-session
* mysql2
* nodemon
* sequelize
* nodemailer

## Technologies 💻

* Heroku
* Node
* HTML5, CSS, TailwindCSS, JS, HandleBars

## License 🔑

This project is licensed under the [MIT](LICENSE) license

## Questions ❔

If you have any questions about the repo, open an issue. 
You can find more of our work at: 
- [Matt Waldron](https://github.com/mrartrager)
- [RyanTrian](https://github.com/RyanTrian).
- [Wesley Lere](https://github.com/WesleyLere)
- [Melissa Vanny Pech](https://github.com/PechMV)