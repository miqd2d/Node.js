## Commands for Synchronous calls
1. To check if a directory/file exists 
```javascript
fs.existsSync(<filename>);
```

2. To create a directory/file 
```javascript
fs.mkdirSync(<filename>);
```

3. To write/create(if not exists) file 
```javascript
fs.writeFileSync(<filename> , <content> , <flag>);
```
* ```{flag : a}``` is used to append

4. To read file 
```javascript
fs.readFileSync(<filename> , <format>);
```

5. To append file data 
```javascript
fs.appendFileSync(<filename> , <content>);
```

## Commands for Async-Chronous calls

1. To create a directory/file 
```javascript
fs.mkdir(<filename> , <callback(err)>);
```

2. To write/create(if not exists) file 
```javascript
fs.writeFile(<filename> , <content> , <flag> , <callback(err)>);
```
* ```{flag : a}``` is used to append

3. To read file 
```javascript
fs.readFileSync(<filename> , <format> , <callback(err , data)>);
```

4. To append file data 
```javascript
fs.appendFileSync(<filename> , <content> , <callback(err)>);
```

