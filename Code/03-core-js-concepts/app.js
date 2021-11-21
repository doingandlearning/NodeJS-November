// const obj = { myKey: { thisIs: 'a nested object' } }
// console.log(obj.myKey)

// const obj1 = { id: 999, fn: function () { console.log(this.id) } }
// obj1.fn() // prints 999

// const obj = { id: 999, fn: function () { console.log(this.id) } }
// const obj2 = { id: 2, fn: obj.fn }
// obj2.fn() // prints 2
// obj.fn() // prints 999

// function fn() { console.log(this.id) }
// const obj = { id: 999 }
// const obj2 = { id: 2 }
// fn.call(obj2) // prints 2
// fn.call(obj) // prints 999
// fn.call({id: ':)'}) // prints :)

// const wolf = {
//     howl: function() { console.log(`${this.name} awoooooo`)}
//   }

//   const dog = Object.create(wolf, {
//     woof: {value: function() {console.log(`${this.name} woof`)}}
//   })

//   const rufus = Object.create(dog, {
//     name: {value: 'Rufus the dog'}
//   })

//   rufus.woof()
//   rufus.howl()
// function Wolf(name) {
//     this.name = name;
//   }

//   Wolf.prototype.howl = function() {
//     console.log(`${this.name} awooooooo`)
//   }

//   function Dog(name) {
//     Wolf.call(this, `${name} the dog`)
//   }

//   Object.setPrototypeOf(Dog.prototype, Wolf.prototype)

//   Dog.prototype.woof = function() {
//     console.log(`${this.name} woof`)
//   }

//   const rufus = new Dog('Rufus')

//   rufus.woof()
//   rufus.howl()

// class Wolf {
//     constructor(name) {
//       this.name = name
//     }
//     howl() {
//       console.log(`${this.name} awooooooo`)
//     }
//   }

//   class Dog extends Wolf {
//     constructor(name) {
//       super(`${name} the dog`)
//     }
//     woof() {
//       console.log(`${this.name} woof`)
//     }
//   }

//   const rufus = new Dog('Rufus')

//   rufus.woof()
//   rufus.howl()
// ```

function outerFunction() {
  let foo = true;
  function print(foo) {
    console.log(foo);
  }
  print(1);
  foo = false;
  print(2);
}
outerFunction();

function init(type) {
  let id = 0;
  return (name) => {
    id += 1;
    return { id: id, type: type, name: name };
  };
}
const createUser = init("user");
const createCourse = init("course");
const kevin = createUser("Kevin");
const annie = createUser("Annie");
const ncb = createCourse("NodeJS");
console.log(kevin); //prints {id: 1, type: 'user', name: 'Kevin'}
console.log(annie); //prints {id: 2, type: 'user', name: 'Annie'}
console.log(ncb); //prints {id: 1, type: 'course', name: 'NodeJS'}

const createKeypair = (secret) => ({
  publicKey: secret.toLowerCase(),
  secret,
  privateKey: secret.toUpperCase(),
});
const cryptoSign = (content, key) =>
  content
    .split("")
    .map((char, index) => `${char}${key[index % key.length]}`)
    .join("");

function createSigner(secret) {
  const keypair = createKeypair(secret);
  return function (content) {
    return {
      signed: cryptoSign(content, keypair.privateKey),
      publicKey: keypair.publicKey,
    };
  };
}
const sign = createSigner("super secret thing");
const signedContent = sign("sign me");
const moreSignedContent = sign("sign me as well");
console.log(signedContent);
