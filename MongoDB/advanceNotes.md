## Aggregation Pipelines
```js
- <model>.aggregate([
    {
        $match : {
            // Gives/returns the data that matches the fields
        }
    },
])
```

## Using common aggregating function
```js
- <model>.aggregate([
    {
        $group : {
            /*
            -> Groups the data and give's the data
            > $max
            > $min
            > $avg
            > $sum
            */
        }
    },
])
```

```js
- <model>.aggregate([
    {
        $project : {
            /*
            -> Only shows the respective fields
            > field_1 : 1 (Show)
            > field_2 : 0 (not show)
            */
        }
    },
])
```

### Referencing the Other documents
- The schema of the document that will refer the other document (Book will refer Author)

```js
const bookSchema = new Schema({
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Author" // The name of the Schema it needs to refer
    }
}) 
```
