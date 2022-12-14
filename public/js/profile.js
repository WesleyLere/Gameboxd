// get current User's data
async function getUser() {
   const userData = await fetch('/api/users/')
   const user = await userData.json();
   const username = user.username;
   const games = user.games;
   const gamesArr = [];
   // make the user's username show 
   const divEl = document.getElementById('username')
   const h2El =`<h2 class="text-5xl text-slate-700 p-1 flex justify-center items-center">${username}</h2>`
   divEl.innerHTML = h2El;
   // push appIds into gamesArr
   for (let i = 0; i < games.length; i++) {
      gamesArr.push(games[i].appId)
   }

   gameCards(gamesArr);
}
// create game-cards with the data from each appId fetch
async function gameCards(games) {
   const options = {
      method: 'GET',
               headers: {
                  'X-RapidAPI-Key': '39fcf7cf62mshb1cac5ccb20e1eep1cf83ejsnd5589ee92c81',
                  'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
               }
   };
   const sectionEl = document.getElementById('game-cards');
   let cardsStr = '';
   for (let i = 0; i < games.length; i++) {
      // fetch game details
      const gameDetailsRespond = await fetch(`https://steam2.p.rapidapi.com/appDetail/${games[i]}`, options)
      const gameDetails = await gameDetailsRespond.json();
      // concat into a long string of div cards
      cardsStr += `<div class="flex flex-wrap justify-center text-center item-center w-96 h-auto items-center border-4 m-10 p-5">
      <h2 class="text-2xl flex flex-wrap justify-center text-center item-center m-5">${gameDetails.title}
      </h2>
      <a href="/game/${games[i]}">
      <img src="${gameDetails.imgUrl}" alt=""  class="flex flex-wrap justify-center items-center hover:scale-110 transition duration-200 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-amber-400">
      </a>
      </div>`
   }
   // insert onto page
   sectionEl.innerHTML = cardsStr;
}

getUser();