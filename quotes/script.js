const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


//Get Quotes from API
let apiQuotes = [];
// Show new quote
function newQuote()
{
    // Pick a random quote from api quotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //console.log(quote);
    // Check of Author is blank and then replace
    if(!quote.author)
    {
        authorText.textContent='Unknown';
    }
    else
    {
        authorText.textContent = quote.author;
    }
   
    //Check size of Quote
    if(quote.text.length>120)
    {
        quoteText.classList.add('long-quote');
    }
    else
    {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}
async function getQuotes()
{
    const apiUrl = 'https://type.fit/api/quotes';

    try{
    // fetch response constant
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    //console.log(apiQuotes);

    }
    catch (error){

//Catch Error Here 
    }
}
// Tweet Quote
function tweetQuote()
{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');

}
// Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
getQuotes('click',newQuote);
