
var game_id = location.pathname.split('/');
getApiCall()

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
    displayData()
})
.catch(err => console.log(err));

}


function displayData(){
    let targetElement = document.getElementById('gamecard')
    let data = JSON.parse(localStorage.getItem('gameReview'))
    let gameReview = ''
        gameReview += `<div class="justify-center items-center flex grid-col-2 flex-wrap mx-auto">
        <h2 class=" basis-1/4 w-auto mx-auto text-7xl text-amber-500 container flex items-center justify-center m-10 p-20">${data.title}
        </h2>
        <img src="${data.imgUrl}" alt="" class="mx-auto mt-10 border-4 border-gray-100 w-auto flex items-center justify-center mx-auto"/>
        </a>
        <p class="shadow-inner border-4 border-gray-100 w-96 flex flex-wrap text-2xl text-center m-10 p-10 items-center justify-center">
        ${data.description}
        </p>
      </div>`
   
    
    targetElement.innerHTML=gameReview
}

function addToProfile(event) {
    
}


async function  ratingFormHandler(event) {
    event.preventDefault();
  
    const commentBox = document.querySelector('#actualReview').value.trim();
    const star = document.querySelector('#stars').value.trim();
  
    if (commentBox && star) {
      const response = await fetch('/api/ratingRoutes/', {
        method: 'POST',
        body: JSON.stringify({ star, commentBox }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log
      if (response.ok) {
        console.log(response)
      } else {
        alert('Failed to post review');
      }
    }
}


// `<div class="flex flex-wrap justify-center items-center border-4 border-gray-100 mx-auto m-5">
// <h2 class="text-2xl p-5 mt-5 text-slate-700 container flex items-center justify-center">${data.title}
// </h2>
// <img src="${data.imgUrl}" alt=""  class=" mx-auto m-5 flex-wrap flex row justify-center items-center hover:shadow-md hover:shadow-amber-400"/>
// </a>
// <p>
// ${data.description}
// </p>
// </div>`
