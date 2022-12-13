function gameSearch() {
    const game = document.querySelector('#search').value.trim()
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39fcf7cf62mshb1cac5ccb20e1eep1cf83ejsnd5589ee92c81',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};
     fetch('https://steam2.p.rapidapi.com/search/' + game + '/page/1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        
            let slicedData= response.slice(0,30)

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
