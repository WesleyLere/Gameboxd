const { UserGame } = require("../../models");

function getprofilegames() {
    const gameId = UserGame
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39fcf7cf62mshb1cac5ccb20e1eep1cf83ejsnd5589ee92c81',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
    
    fetch('https://steam2.p.rapidapi.com/appDetail/730', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}