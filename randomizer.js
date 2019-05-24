const quotes = require('./quotes')
const range = count => Array(count).fill(null)

module.exports = getRandom

function appendQuote(currentQuotes) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  return currentQuotes.includes(quote)
    ? appendQuote(currentQuotes)
    : [...currentQuotes, quote]
}

function getRandom(quoteCount) {
  return range(Math.min(quoteCount, quotes.length)).reduce(out => appendQuote(out), [])
}
