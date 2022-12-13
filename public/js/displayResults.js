//const search = require("../../controllers/homeRoutes");
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    let searchGames = ''
    for (let i = 0; i < data.length; i++) { 
        searchGames += `<div class="flex flex-wrap justify-center text-center item-center w-96 h-auto items-center border-4 m-10 p-5">
        <h2 class="text-2xl flex flex-wrap justify-center text-center item-center m-5">${data[i].title}
        </h2>
        <a href="/game/${data[i].appId}">
        <img src="${data[i].imgUrl}" alt=""  class="flex flex-wrap justify-center items-center hover:scale-110 transition duration-200 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-amber-400">
        </a>
      </div>`
    }
    targetElement.innerHTML = searchGames
    console.log(data);

}

displayData() 

