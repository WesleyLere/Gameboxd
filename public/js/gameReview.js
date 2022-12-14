
var game_id = location.pathname.split('/')[2];
getApiCall()

function getApiCall() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '39fcf7cf62mshb1cac5ccb20e1eep1cf83ejsnd5589ee92c81',
      'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
    }
  };

fetch('https://steam2.p.rapidapi.com/appDetail/' + game_id, options)
.then(response => response.json())
.then(response => {
    localStorage.setItem('gameReview', JSON.stringify(response))
    displayData()
})
.catch(err => console.log(err));

}


function displayData(){
    let targetElement = document.getElementById('gamecard')
    let data = JSON.parse(localStorage.getItem('gameReview'))
    let gameReview = ''
        gameReview += `<div class="justify-center items-center flex flex-wrap grid-col-2">
        <h2 class=" basis-1/4 m-10 text-7xl text-amber-500 container flex flex-wrap items-center justify-center">${data.title}
        </h2>
        <img src="${data.imgUrl}" alt="" class="mx-auto mt-10 border-2 border-gray-100 w-auto flex items-center justify-center mx-auto"/>
        </a>
        <p class="shadow-inner border-2 border-gray-100 w-96 flex flex-wrap text-2xl text-center m-10 p-10 items-center justify-center">
        ${data.description}
        </p>
      </div>
      <div class="flex justify-center items-center mx-auto">
      <button id="profileButton"
      class="transform transition duration-200 mb-10 hover:scale-110 hover:shadow-md flex items-center justify-center bg-cyan-700 hover:bg-teal-500 rounded-full text-white font-bold py-4 px-6 mb- focus:outline-none focus:shadow-outline">
      Add game to profile
    </button>
      </div>`
   
    
    targetElement.innerHTML=gameReview
}

function addToProfile(event) {
    
}


async function  ratingFormHandler(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#actualReview').value.trim();
    let rating = document.querySelector('input[name="rate"]:checked').value
    rating = parseInt(rating)
    game_id = parseInt(game_id)

    if (comment && rating) {
      const response = await fetch('/api/ratings', {
        method: 'POST',
        body: JSON.stringify({ comment, rating, game_id}),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to post review');
      }
    } else {
      console.error("Please fill out both Review and Rating")
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
