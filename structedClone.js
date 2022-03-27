const person  = {
    name: 'John',
    age: 30,
    hobbies: ['music', 'movies'],
    address: {
        city: 'Miami',
        state: 'FL'
    }
};

let personCopy = {...person};
personCopy.name = 'chris';
personCopy.address.city = 'Orlando';
console.log(person.address.city)
console.log(personCopy.address.city)
