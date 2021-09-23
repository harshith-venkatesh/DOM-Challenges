"use strict";
let id = 5;
console.log({ id });
let company = 'Harshith';
let isPublished = false;
let age;
age = 40;
console.log({ age });
let ids = [12, 3, 4, 5, 6];
ids.push('harsith');
// Tuple
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(this.id, this.name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Mike = new User(123, 'Mike');
const Jake = new User(1233, 'Jake');
console.log(Mike.id);
console.log(Mike.register());
class Employee extends User {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'hi', 'developer');
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = [1, 2, 3, 4, 5];
let stringArray = ['afs', 'asfaf', 'afffsafas'];
console.log(getArray(numArray));
