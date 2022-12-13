
var game_id = location.pathname.split('/');
getApiCall()
displayData()
console.log(game_id)
function getApiCall() {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1de65c19c5msh9876d1e1d58d892p118e56jsn90eaf3b097de',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};

fetch('https://steam2.p.rapidapi.com/appDetail/' + game_id[2], options)
.then(response => response.json())
.then(response => {
    console.log(response)
    localStorage.setItem('gameReview', JSON.stringify(response))
    
})
.catch(err => console.log(err));
}


function displayData(){
    let targetElement = document.getElementById('gamecard')
    let data = JSON.parse(localStorage.getItem('gameReview'))
    let gameReview = ''
    for (let i = 0; i < data.length; i++) {
        gameReview += `<div class="flex flex-wrap justify-center items-center border-4 border-gray-100 mx-auto m-5">
        <h2 class="text-2xl p-5 mt-5 text-slate-700 container flex items-center justify-center">${data[i].title}
        </h2>
        <img src="${data[i].imgUrl}" alt=""  class=" mx-auto m-5 flex-wrap flex row justify-center items-center hover:shadow-md hover:shadow-amber-400">
        </a>
        <p>
        ${data[i].description}
        </p>
      </div>`
    }
   
    
    targetElement.innerHTML=gameReview
}

