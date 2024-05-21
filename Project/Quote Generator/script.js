
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = data.content;
            authorElement.textContent = ` - ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
            authorElement.textContent = '';
        });
}

newQuoteBtn.addEventListener('click', getQuote);

// Initial quote fetch
getQuote();
