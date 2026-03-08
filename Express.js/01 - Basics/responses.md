## In Express.js, here's how the response methods differ:
```javascript
res.send()
```

**The most versatile method** — automatically sets 
* Content-Type based on what you pass (string → text/html, object/array → application/json, Buffer → application/octet-stream)
* Sets Content-Length automatically
* Handles ETags for caching
* Calls ```res.end()``` internally

```js
res.send("Hello")           // text/html
res.send({ name: "John" })  // application/json
res.send(Buffer.from("hi")) // application/octet-stream
```
---

```js
res.end()
```
* Raw Node.js HTTP method (not Express-specific)
* No automatic Content-Type or Content-Length
* Best for ending a response with no data, or when you want full manual control
* Slightly faster since it skips Express processing

```js
res.end()              // just close the connection
res.end("raw string")  // no headers set automatically
```
---
```js
res.json()
```

* Always sends application/json
* Runs ```JSON.stringify()``` on the value
* More explicit than ```res.send({})``` — use this when you know you're sending JSON

```js
res.json({ success: true })
```
---
```js
res.sendFile()
```

* Streams a file from disk
* Sets Content-Type based on file extension
* Requires an absolute path (or root option)

```js
res.sendFile(path.join(__dirname, "index.html"))
```
---
```js
res.redirect()
```

*Sends a 3xx redirect response
*Defaults to 302 if no status given

```js
res.redirect("/login")
res.redirect(301, "/new-url")
```
---
```js
res.render()
```

*Renders a template (e.g. EJS, Pug, Handlebars) and sends the HTML
*Requires a view engine to be configured

```js
res.render("home", { user: "Alice" })
```