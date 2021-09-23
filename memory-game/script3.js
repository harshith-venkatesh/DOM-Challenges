const user = {
    firstName:"Harshith"
}

function logData(lastName){
    console.log(`My name is ${this.firstName} ${lastName}`)
}

logData.apply(user,['Venkatesh'])

Function.prototype.myApply = function(context,args) {
    context.fn = this;
    return context.fn(...args);
    
}

Function.prototype.myCall = function(context,...args) {
    context.fn = this;
    console.log(context.fn)
    return context.fn(...args);
}

logData.myApply(user,['Venkatesh']);
logData.myCall(user,'Venkatesh');

//Polyfill for myBind

let myFunc = function(id,city){
    console.log(`${this.firstName},${id},${city}`)
}

Function.prototype.myBind = function(context, ...args){
    let func = this;
    let firstArgs = args;
    return function(...secondArgs){
        func.apply(context,[...firstArgs,...secondArgs])
    }
}

let newFunc = myFunc.myBind(user, 'a_random_id')
newFunc('New York')

Function.prototype.myyApply = function(context,args){
    context.fn = this;
    return context.fn(...args);
}

logData.myyApply(user,['VVV','V'])

let f1 = (cb) => {
    return new Promise(function(resolve) {
      setTimeout(() => {
          resolve(cb(null, {a: 1}));
      }, 100);
    });
  }
  
  let f2 = (cb) => { 
    return new Promise(function(resolve) {
      setTimeout(() => {
          resolve(cb(null, {a: 2}));
      }, 50);
    });
  }
  
  let f3 = (cb) => { 
    return new Promise(function(resolve) {
      setTimeout(() => {
          resolve(cb(null, {a: 3}));
      }, 10);
    });
  }

  function parallelConsole(arr, cb) {
   let promisedArray = arr.map((_,val)=> val);
   console.log(promisedArray);
   Promise.all(promisedArray).then(val=> cb(val));
   
  };
  
  parallelConsole([f1, f2, f3], (res) => {
    console.log(res) //[{a: 3}, {a: 2}, {a: 1}]
  });



  //     arr.forEach(func => {
//         func((temp, val) => {
//             console.log(val)
//             result.push(val)
//             if(arr.length === result.length) {
//                 cb(result)
           
//             }      
//         })
//     })

// let f1 = (cb) => { 
//     setTimeout(() => {
//         cb(null, {a: 1})
//     },100)
// }

// let f2 = (cb) => { 
//     setTimeout(() => {
//         cb(null, {a: 2})
//     },50)
// }

// let f3 = (cb) => { 
//     setTimeout(() => {
//         cb(null, {a: 3})
//     },10)
// }

// async function parallelConsole(arr, cb) {
//     let result = [];
//     for(const value of arr){
//         console.log(value);

//            await value((temp, val) => {
//             console.log(val)
//             result.push(val)
//             if(arr.length === result.length) {
//                 cb(result)
           
//             }      
//         })
//     }
// }
    

// parallelConsole([f1, f2, f3], (res) => {
//     console.log(res) //[{a: 3}, {a: 2}, {a: 1}]
// })

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.getProfile = function() {
//         // Outer function context
//         console.log(this.constructor.name); // User
//         return function() {
//             // Inner function context
//             console.log(this.constructor.name); // Window
//             console.log("I'm " + this.name + ", " + this.age + " yrs old");
//         };
//     }
// }

// var user = new User('John', 25);
// var profile = user.getProfile();
// profile();

// User
// undefined
// I'm  , undefined yrs old
