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

# Handling Errors

---

By the end of this section, you should be able to:

- Understand the general purpose of errors.
- Get to grips with different types of errors.
- Understand how to create an error.
- Intercept and identify errors.
- Explore error propagation in various scenarios.

---

# Kinds of Errors

<div v-click>
1. Operational

- Errors that happen while the program is doing something (network failure, I/O failure).
These should be ideally recovered from.
</div>

<div v-click>
2. Developer

- The program should probably stop running (invalid input? faulty logic?) but should give a helpful error to the developer.
</div>

---

# Throwing

- You can throw anything
- You could throw a string
- It is best to throw an instance of the Error class

---

# Native Error Constructors

As well as Error, there are six other native error constructors:

<div v-click>
- EvalError
- SyntaxError
- RangeError
- ReferenceError
- TypeError
- URIError
</div>

<div v-click>
These are mostly for JS API's but you can leverage them if you want.
</div>

---

# Custom Errors

- Native errors are limited and rudimentary.
- We can make our own by subclassing native error constructors or by using a code property.

---

# Try/Catch

- When an error is thrown in a normal synchronous function it can be handled with a try/catch block.

---

# Rejections

---

# Async Try/Catch

---

# Propagation

Error propagation is where, instead of handling the error, we make it the responsibility of the caller instead.

---
layout: two-cols
---
# Exercises

1. The native URL constructor can be used to parse URLs, it's been wrapped into a function called parseURL:
```js
function parseURL (str) {
  const parsed = new URL(str)
  return parsed
}
```
If URL is passed a unparsable URL string it will throw, so calling parseURL('foo') will result in an exception. The labs folder contains exercise1.js. 

Modify the parseURL function body such that instead of throwing an error, it returns null when URL is invalid. Use the fact that URL will throw when given invalid input to determine whether or not to return null or a parsed object. Run `node exercise1.js` and if the output says passed you've been successful.

::right::

2. The following code loads the fs module and uses its promises interface to read a file.
```js
const fs = require('fs')

async function read (file) {
  const content = await fs.promises.readFile(file)
  return content
}
```
The promise returned from fs.promises.readFile may reject for a variety of reasons, for instance if the specified file path doesn't exist or the process doesn't have permissions to access it. We don't care what the reason for failure is, we just want to propagate a single error instance from the native Error constructor with the message 'failed to read'.

In exercise2.js modify the body of the read function so that any possible rejection by the promise returned results in the read function rejecting with a new Error('failed to read') error. 