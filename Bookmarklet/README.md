Run the code in the console or via a bookmark.

If you experience issues make sure to use Chrome. Other browsers can break Nullify for some reason.

```js
javascript:fetch(`https://res.cloudinary.com/plu/raw/upload/v${Math.floor(Math.random() * (999999 - 999) + 999)}/nullify.js`).then((res) => res.text().then((t) => eval(t)))
```
