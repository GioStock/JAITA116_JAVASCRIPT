/* -------------------------------------------------------------------------- */
/*                                    fetch                                   */
/* -------------------------------------------------------------------------- */
const URLQuotes = "https://dummyjson.com/quotes";

fetch(URLQuotes)
    .then(data=>{
        return data.json();

    })
    .then(quotes=>{
        let cose=[];
        console.log(quotes);
        console.log(quotes.quotes);
    
    })