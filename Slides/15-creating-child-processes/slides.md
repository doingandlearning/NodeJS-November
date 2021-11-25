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

# Creating Child Processes

---

By the end of this section, you should be able to:

- Discuss various ways to create child processes.
- Understand key relevant configuration options when starting child processes.
- Discover different ways to handle child process input and output.
- Communicate with child processes.

---

# Child Process Creation

The child_process module has the following methods, all of which spawn a process some way or another:

- exec & execSync
- spawn & spawnSync
- execFile & execFileSync
- fork

---

# execFile & execFileSync Methods

<v-clicks>

The execFile and execFileSync methods are variations of the exec and execSync methods. 

Rather than defaulting to executing a provided command in a shell, it attempts to execute the provided path to a binary executable directly. 

This is slightly more efficient but at the cost of some features. 

See the [execFile Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/child_process.html#child_process_child_process_execfile_file_args_options_callback) for more information.

</v-clicks>

---

# fork Method

<v-clicks>

The fork method is a specialization of the spawn method.

By default, it will spawn a new Node process of the currently executing JavaScript file (although a different JavaScript file to execute can be supplied).
 
It also sets up Interprocess Communication (IPC) with the subprocess by default. 

See [fork Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/child_process.html#child_process_child_process_fork_modulepath_args_options) to learn more.

</v-clicks>

---

# exec & execSync Methods

The child_process.execSync method is the simplest way to execute a command.

It returns a buffer containing the output of the command. This is both the STDOUT and STDERR output.

---

# spawn & spawnSync

While exec and execSync take a full shell command, spawn takes the executable path as the first argument and then an array of flags that should be passed to the command as second argument.

---

# Process Configuration

An options object can be passed as a third argument in the case of spawn and spawnSync or the second argument in the case of exec and execSync.

---

# Child STDIO

Asynchronous child creation methods (exec and spawn) return a ChildProcess instance which has stdin, stdout and stderr streams representing the I/O of the subprocess.

This is the default behavior, but it can be altered.

---

# Exercises

1. In exercise 1, you need to modify the exercise function so that it returns a child process. This child process should have a single environment variable called MY_ENV_VAR. 

Running node exercise1 should return passed.

2. STDIO Redirection. In exercise2, Complete the exercise function so that the returned child process

- has no ability to read STDIN
- redirects its STDOUT to the parent process' STDOUT
- exposes STDERR as a readable stream

The folder also contains a test.js file. To verify that the exercise was completed successfully run node test.js, if the implementation is correct the process will output: passed!