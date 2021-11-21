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

# Packages and Dependencies

---

# npm 

Default package manager installed with Node. 

- `npm help` - print a list of available commands
- `npm install -h` - get quick help output on a particular command
- `npm init` - initialize a new project/package

---

# package.json

```json {all|2|3|4|5|6-8|9|10|11|all}
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

# Installing dependencies

- `npm install <package_name>` / `npm i <package_name>`
## `node_modules`
- Delete and `npm i`
## Development dependencies
- `npm i -D`

---

# Semver

- `MAJOR`.`MINOR`.`PATCH`

--- 

# Package scripts

The "scripts" field in package.json can be used to define aliases for shell commands that are relevant to a Node.js project.

---

# Exercises

1. `Labs/04-packages-and-dependencies` has a `package.json` file in it. Install the following:
- `nodemon` as a development dependency
- `express` at greater than or equal to 4.0.0
- `cors` at exactly 2.8.5

2. Create an index.js file that logs to the console. Then:
- Add a `dev` script to the package.json that will run the `index.js` file using nodemon. 
- Change the file and save it. 
- Confirm that nodemon restarts and the new value displays.




