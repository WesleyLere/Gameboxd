//const search = require("../../controllers/homeRoutes");
var searchTitle = localStorage.getItem('title');
var searchImg = localStorage.getItem('imgurl');
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    let aLiString = ''
    for (let i = 0; i < data.length; i++) { 
        aLiString += `<div class="justify-center items-center">
        <h2 class="text-3xl p-1 m-10 text-slate-700 container flex flex-wrap items-center justify-center mx-auto">${data[i].title}
        </h2>
        <img src="${data[i].imgUrl}" alt="" class=" flex-wrap m-8 flex row justify-center items-center hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
      </div>`
    }
    targetElement.innerHTML = aLiString
    console.log(data);

}

displayData() 

searchButton.addEventListener("click", function(){

    gameSearched=gameSearchedInput.value
 
    gameSearchURL = 'https://steam2.p.rapidapi.com/search/' + game + '/page/1', options
 
    console.log(gameSearched)
 
    setGame()
 })


 
// first get data from local storage 
// loop through data and target element inside search page.handlebars 
// clear out key searchResult from local storage 
//  hResult from local storage 
//  hResult from local storage 
//  hResult from local storage 
//  