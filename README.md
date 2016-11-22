# json-serializer

JSON API serializer

## Example

```js
const JsonSerializer = require('./index');

var serializer = new JsonSerializer('manager',{
  attributes: [
    'firstName', 
    'lastName', 
    'branchName'
    ],
 relationships: {
  _merchant: { type: 'merchant'}
 }
});

serializer.serialize({
  _id: 'xxxx',
  firstName: 'John',
  lastName: 'Mayer',
  branchName: 'ABC',
  _merchant: 'xxxxx'
})

```
