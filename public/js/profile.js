const { UserGame } = require("../../models");

function getprofilegames() {
    const gameId = UserGame
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.apiKey,
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
    
    fetch('https://steam2.p.rapidapi.com/appDetail/730', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}