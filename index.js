const express = require('express')
const randomizer = require('./randomizer')
// const schema = require('./schema.json')
const app = express()
const port = process.env.PORT || 9542

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})

app.all('*', (req, res, next) => {
  console.log(`${dateFormatter.format(new Date())} - request for ${req.path}`)
  res.set('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/v2/quotes/:num?', (req, res) => {
  res.send(randomizer(parseInt(req.params.num, 10) || 1))
})

// app.get('/v2/schema', (req, res) => {
//   res.set('Cache-Control', 'max-age=172800, stale-while-revalidate=3600')
//   res.json(schema)
// })

app.listen(port, () => {
  console.log('Server running on port', port)
})
