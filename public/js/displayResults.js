//const search = require("../../controllers/homeRoutes");
var searchTitle = localStorage.getItem('title');
var searchImg = localStorage.getItem('imgurl');
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    let searchGames = ''
    for (let i = 0; i < data.length; i++) { 
        aLiString += `<div class="justify-center items-center border-4 border-gray-100 mx-auto m-5">
        <h2 class="text-3xl p-10 tedxt-slate-700 container flex flex-wrap items-center justify-center mx-auto">${data[i].title}
        searchGames += `<div class="flex flex-wrap justify-center items-center border-4 border-gray-100 mx-auto m-5">
        <h2 class="text-2xl p-5 mt-5 text-slate-700 container flex items-center justify-center">${data[i].title}
        </h2>
        <img src="${data[i].imgUrl}" alt="" class=" mx-auto m-5 flex-wrap flex row justify-center items-center hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
        <a href="/game/${data[i].appId}">
        <img src="${data[i].imgUrl}" alt=""  class=" mx-auto m-5 flex-wrap flex row justify-center items-center hover:scale-110 transition duration-200 ease-in-out cursor-pointer hover:shadow-md hover:shadow-amber-400">
        </a>
      </div>`
    }
    targetElement.innerHTML = searchGames
    console.log(data);

}

displayData() 


    gameSearched=gameSearchedInput.value
 
    gameSearchURL = 'https://steam2.p.rapidapi.com/search/' + game + '/page/1', options
 
    console.log(gameSearched)
 
    setGame()
 


 
// first get data from local storage 
// loop through data and target element inside search page.handlebars 
// clear out key searchResult from local storage 
//  hResult from local storage 
//  hResult from local storage 
//  hResult from local storage 
//  hResult from local storage 
//  hResult from local storage 
//  
