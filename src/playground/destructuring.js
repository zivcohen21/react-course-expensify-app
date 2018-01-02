/*
const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 88
    }
};

const {name, age} = person;

console.log(`${name} is ${age}.`);

const {city, temp} = person.location;

if(city && temp) {
    console.log(`it's ${temp} in ${city}.`);
}

*/

/*
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);*/
/*

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);*/

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`);
