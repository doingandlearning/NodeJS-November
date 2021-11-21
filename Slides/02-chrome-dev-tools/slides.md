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
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Debugging with Chrome Dev Tools
	- Learn how to start a process in inspect mode
	- Connect to a process in inspect mode in order to debug it
	- Understand what breakpoints are and how to set them

---

# Starting in Inspect Mode

Consider this code as `app.js`:
```js 
function test(n = 99) {
  if (n === 0) throw Error();
  test(n-1)
}

test()
```

## node --inspect app.js
## node --inspect-brk app.js
## chrome://inspect

--- 

# Exercises

1. The labs folder contains an `app.js` file. Start `app.js` with Node in Inspect Mode, but with the application immediately paused on the first line of execution code.

If this done correctly, then the program should be paused on line 1. Verify this in the Chrome Devtools.

2. Explore setting breakpoints and then querying your API using code and the UI.

3. If you've time, explore what else is available to you in the debugger.