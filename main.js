// Exercise 1
console.groupCollapsed("Exercise 1")

class Subbies {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if(index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers() {
        for(let observer of this.observers) {
            observer.update();
        }
    }
}
class Observie {
    update() {
        console.log('it works!');
    }
}
let sub = new Subbies();
let kim = new Observie();
let jim = new Observie();
sub.addObserver(kim);
sub.addObserver(jim);
sub.notifyObservers();
console.groupEnd();

// Exercise 2
console.groupCollapsed("Exercise 2")

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};
let name = person.name;
let age= person.age;
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [a,b,c,d] = fruits;
console.log([,b,,d])
const {address: {city, country}} = person
console.log(city);
console.log(country);

console.groupEnd();

// Exercise 3
console.groupCollapsed("Exercise 3")
async function fetchPosts() {
    try{const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';}
    catch{ console.log('error found');}
}
// Call the function to fetch posts
fetchPosts();
console.groupEnd();

// Exercise 4 
console.groupCollapsed("Exercise 4")
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	notifyObservers(data) {
		this.observers.forEach(observer => observer.update(data));
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
		try {
			const response = await fetch(url);
			const data = await response.json();
			this.notifyObservers(data);
		} catch (error) {
			this.notifyObservers(`Error: ${error.message}`);
		}
	}
}

class Observer {
	update(data) {
		if (typeof data === 'string') {
			console.log(data);
		} else {
			const [{ title }] = data;
			console.log(title);
		}
	}
}

// Instantiate the Subject
const subject = new Subject();

// Add observers
subject.addObserver(new Observer());
subject.addObserver(new Observer());

// Call the fetchAndNotify method
subject.fetchAndNotify();

console.groupEnd()