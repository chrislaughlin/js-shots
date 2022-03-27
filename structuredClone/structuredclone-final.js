const person  = {
    name: 'Chris',
    age: 33,
    hobbies: ['JavaScript', 'Movies'],
    address: {
        city: 'Belfast',
        country: 'UK'
    }
};

let personCopy = structuredClone(person);

personCopy.name = 'John';
personCopy.address.city = 'Derry';

console.log(person)
console.log(personCopy)
