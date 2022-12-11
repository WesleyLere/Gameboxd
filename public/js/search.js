function gameSearch() {
    const game = document.querySelector('#search').value.trim()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1de65c19c5msh9876d1e1d58d892p118e56jsn90eaf3b097de',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
     fetch('https://steam2.p.rapidapi.com/search/' + game + '/page/1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        
            let slicedData= response.slice(0,4)

            localStorage.setItem('searchResult', JSON.stringify(slicedData))
            document.location.replace('/searchResult');
        })
        .catch(err => console.error(err));
   
}
// document.getElementById("searchBtn").addEventListener("click", gameSearch)
document.getElementById("search")
    .addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        gameSearch();
    }
});


// fetch('https://steam2.p.rapidapi.com/search/')
//   .then(response => response.json()) // Parse the response as JSON
//   .then(data => {
//     // Extract the data you want to display from the response
//     const items = data.items;

//     // Use the appropriate HTML elements to render the data on the page
//     const ul = document.createElement('ul');
//     items.forEach(item => {
//       const li = document.createElement('li');
//       li.textContent = item.name;
//       ul.appendChild(li);
//     });
//     document.body.appendChild(ul);
//   });