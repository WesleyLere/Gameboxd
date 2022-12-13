//const search = require("../../controllers/homeRoutes");
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    let searchGames = ''
    for (let i = 0; i < data.length; i++) { 
        aLiString += `<div class="justify-center items-center border-4 border-gray-100 mx-auto m-5">
        <h2 class="text-3xl p-10 tedxt-slate-700 container flex flex-wrap items-center justify-center mx-auto">${data[i].title}
        </h2>
        <img src="${data[i].imgUrl}" alt="" class=" mx-auto m-5 flex-wrap flex row justify-center items-center hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
      </div>`
    }
    targetElement.innerHTML = searchGames
    console.log(data);

}

displayData() 


