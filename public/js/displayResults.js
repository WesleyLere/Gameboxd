//const search = require("../../controllers/homeRoutes");
var searchTitle = localStorage.getItem('title');
var searchImg = localStorage.getItem('imgurl');
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    let aLiString = ''
    for (let i = 0; i < data.length; i++) { 
        aLiString += `<div class="justify-center items-center">
        <h2 class="text-3xl p-3 m-3 text-slate-700 container flex flex-wrap items-center justify-center mx-auto">${data[i].title}
        </h2>
        <img src="${data[i].imgUrl}" alt="" class="flex-wrap m-8 flex row justify-center items-center">
      </div>`
    }
    targetElement.innerHTML = aLiString
    console.log(data);

}

displayData() 
