const { UserGame } = require("../../models");

function getprofilegames() {
    const game = UserGame
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1de65c19c5msh9876d1e1d58d892p118e56jsn90eaf3b097de',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
    
    fetch('https://steam2.p.rapidapi.com/appDetail/730', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}