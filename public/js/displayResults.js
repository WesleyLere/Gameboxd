
let targetElement =document.getElementById('searchResults')

function displayData(){
    let data = JSON.parse(localStorage.getItem('searchResult'))
    console.log(data);
}

displayData() 


if(localStorage.getItem('searchResult')){
const itemValue = localStorage.getItem('title');
const outputElement = document.querySelector('#title');
outputElement.textContent = itemValue;
}
// first get data from local storage 
// loop through data and target element inside search page.handlebars 
// clear out key searchResult from local storage 
// 