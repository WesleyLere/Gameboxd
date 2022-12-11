
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    console.log(data);
}

displayData() 

searchButton.addEventListener("click", function(){

    gameSearched=gameSearchedInput.value
 
    gameSearchURL = 'https://steam2.p.rapidapi.com/search/' + game + '/page/1', options
 
    console.log(gameSearched)
 
    setGame()
 })



 let storageLocal = JSON.parse(localStorage.getItem("game")) || [];
for (let i = 0; i < storageLocal.length; i++) {
  savedText.append(storageLocal[i].date + ': ' + storageLocal[i].description + '<br>');
}

 

// first get data from local storage 
// loop through data and target element inside search page.handlebars 
// clear out key searchResult from local storage 
//  