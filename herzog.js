const quote = document.getElementById('quote')
const url = 'v2/quotes'
const btn = document.getElementById('get-another')

function getQuote(e) {
  if (e) e.preventDefault()
  fetch(url)
    .then(res => res.json())
    .then(json => {
      quote.innerText = `${json}`
    })
    .catch(err => console.log(err))
}

window.addEventListener('load', getQuote)
btn.addEventListener('touchend', function(e) {
  e.preventDefault()
  getQuote(e)
})

btn.addEventListener('click', e => getQuote(e))
