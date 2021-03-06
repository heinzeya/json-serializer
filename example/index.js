const JsonSerializer = require('../lib/serializer');

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

var obj = serializer.serialize({
  _id: 'xxxx',
  firstName: 'John',
  lastName: 'Mayer',
  branchName: 'ABC',
  _merchant: 'xxxxx'
});

console.log(obj)