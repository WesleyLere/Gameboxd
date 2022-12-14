
var game_id = location.pathname.split('/')[2];
getApiCall()

function steamScore(game) {
  const pTag = document.getElementById(steamScore);
  const score = game.allReviews.ratingValue;
  const text = `Steam Score: ${score}/10`;
  pTag.innerText = text;
}

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
    steamScore(response);
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
        <img src="${data.imgUrl}" alt="" class="shadow-inner mx-auto mt-10 border-2 border-gray-100 w-auto flex items-center justify-center mx-auto"/>
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
    document.querySelector('#profileButton').addEventListener('click', addToProfile);
}

async function addToProfile(event) {
  event.preventDefault();

  if (game_id) {
    const response = await fetch('/api/games/'+game_id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to post review');
    }
  } 
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

document.querySelector('#submitButton').addEventListener('click', ratingFormHandler);

