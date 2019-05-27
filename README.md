> forked from [jamesseanwrite/ron-swanson-quotes](https://github.com/jamesseanwright/ron-swanson-quotes)

> many quotes gathered from azquotes.com; here's their citation:

```
Werner Herzog. (n.d.). AZQuotes.com. Retrieved May 27, 2019, from AZQuotes.com Web site: https://www.azquotes.com/author/6633-Werner_Herzog
```

# An API that returns random Werner Herzog quotes

An express-based api for retrieving a random Werner Herzog quotes. 

Feel free to clone or fork this app and mutilate it to your heart's content.

The easiest way to do that is:

```
git clone https://github.com/pcktbot/herzog-quotes.git
cd herzog-quotes
npm install
npm start
```

The default port is `9542` in honor of Herzog's birthday. The local server then is `http://localhost:9542`.

> The app is running on Heroku and may be sleeping. If you need more availability, host it yourself.

There's a client to look at at `/`. [Demo](https://herzog-quotes.herokuapp.com)

Request up to 10 quotes at `v2/quotes/:num`, where `:num` is an integer.

Here's a client-side fetch in JavaScript.

``` js
fetch('https://herzog-quotes.herokuapp.com/v2/quotes/2')
  .then(res => res.json())
  .then(json => { /* @return {Array} quotes */ })
```
Get the schema at `v2/schema`. The response is JSON.

## Future Plans

I may fiddle with the client to make the page more mobile-friendly. I only have a click handler on button currently.
