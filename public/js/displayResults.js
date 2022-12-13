//const search = require("../../controllers/homeRoutes");
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    let searchGames = ''
    for (let i = 0; i < data.length; i++) { 
        searchGames += `<div class="flex flex-wrap justify-center items-center border-4 border-gray-100 mx-auto m-5">
        <h2 class="text-2xl p-5 mt-5 text-slate-700 container flex items-center justify-center">${data[i].title}
        </h2>
        <a href="/game/${data[i].appId}">
        <img src="${data[i].imgUrl}" alt=""  class=" mx-auto m-5 flex-wrap flex row justify-center items-center hover:scale-110 transition duration-200 ease-in-out cursor-pointer hover:shadow-md hover:shadow-amber-400">
        </a>
      </div>`
    }
    targetElement.innerHTML = searchGames
    console.log(data);

}

displayData() 


