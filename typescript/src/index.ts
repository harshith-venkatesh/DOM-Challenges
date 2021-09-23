let id: number= 5;
console.log({id})
let company: string = 'Harshith';
let isPublished: boolean = false;
let age:number;
age=40;
console.log({age})

let ids: any[] = [12,3,4,5,6]
ids.push('harsith')

// Tuple

class User implements PersonInterface{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
        console.log(this.id,this.name);
    }

    register(): string {
        return `${this.name} is now registered`
    }
}

const Mike = new User(123,'Mike');
const Jake = new User(1233,'Jake');
console.log(Mike.id);
console.log(Mike.register())

interface PersonInterface{
    id: number
    name:string
    register():string
}

class Employee extends User {
    position: string;

    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position = position;
    }
}

const emp = new Employee(1,'hi','developer')
console.log(emp.register())

function getArray<T>(items:T[]): T[] {
    return new Array().concat(items)
}

let numArray = [1,2,3,4,5]
let stringArray = ['afs','asfaf','afffsafas']
console.log(getArray<number>(numArray))