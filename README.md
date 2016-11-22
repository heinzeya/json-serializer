# json-serializer

JSON API serializer

## Example

```js
const JsonSerializer = require('./index');

var serializer = new JsonSerializer('manager',{
  attributes: [
    'firstName', 
    'lastName', 
    'branchName',
    'created',
    'email'
    ],
 relationships: {
  _merchant: { type: 'merchant'}
 }
});
```
