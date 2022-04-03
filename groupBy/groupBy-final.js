const groupBy = require('core-js/actual/array/group-by');
const DOGS = require('./dogs');

console.log(DOGS);

const groupedDogs = DOGS.groupBy(dog => dog.breed);

console.log(
    JSON.stringify(
        groupedDogs, 
        null, 
        4
    )
);