---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Understand key JavaScript concepts

---

# Aims
	- Understand data types in JavaScript
	- Explain functions as first class citizens
	- Explain the role of closure scope in state management
	- Describe the prototypical nature of all JavaScript-based inheritance

---

# Data Types

There are seven primitive types - everything else is an object (including functions and arrays).

- Null
- Undefined
- String
- Number
- Boolean
- Symbol
- BigInt

--- 

# Functions
- Multi-paradigm nature of JS
- Functions passed as arguments 
- Functions assigned as values in an object
- this
- (Fat) Arrow Functions

--- 

# Prototypical Inheritance

Inheritance with JS is achieved with a chain of prototypes. These approaches have evolved significantly over time.

The three common approaches to creating a prototypal chain:
- functional
- constructor functions
- class-syntax constructors

--- 

# Prototypical Inheritance (Functional)

```js {all|1-3|1-7|1-11|all}
const wolf = {
  howl: function() { console.log(`${this.name} awoooooo`)}
}

const dog = Object.create(wolf, {
  woof: {value: function() {console.log(`${this.name} woof`)}}
})

const rufus = Object.create(dog, {
  name: {value: 'Rufus the dog'}
})

rufus.woof()
rufus.howl()
```

---

# Prototypical Inheritance (Constructor function)

```js {all|1-3|1-7|9-11|13|13-17|19|all}
function Wolf(name) {
  this.name = name;
}
  
Wolf.prototype.howl = function() {
  console.log(`${this.name} awooooooo`)
}
  
function Dog(name) {
  Wolf.call(this, `${name} the dog`)
}
  
Object.setPrototypeOf(Dog.prototype, Wolf.prototype)
  
Dog.prototype.woof = function() {
  console.log(`${this.name} woof`)
}
  
const rufus = new Dog('Rufus')
  
rufus.woof()
rufus.howl()
```

---

# Prototypal Inheritance (Class-Syntax Constructors)

```js
class Wolf {
  constructor(name) {
    this.name = name
  }
  howl() {
    console.log(`${this.name} awooooooo`)
  }
}

class Dog extends Wolf {
  constructor(name) {
    super(`${name} the dog`)
  }
  woof() {
    console.log(`${this.name} woof`)
  }
}

const rufus = new Dog('Rufus')

rufus.woof()
rufus.howl()
```

---

# Closure Scope

When a function is created, an invisible object is also created - this is the closure scope.

Parameters and variables created in the function are stored on this object.

```js
function outerFunction() {
  const foo = true;
  function print() {
    console.log(foo)
  }
  foo = false
  print()
}
outerFunction()
```

---

# Exercises

1. Open the file `exercise1.js`. Implement the prefixer function as a closure function. It will return a function with the given prefix defined. Run `node exercise1.js` in the directory and you should get the correct Hello's and Goodbye's.

2. Open the file `exercises2.js`. Your job is to create a prototype chain from leopard -> lynx -> cat. Decide which type of inheritance you want to try to implement (remember the three are functional, constructor, class syntax). If you have time, try another implementation.

