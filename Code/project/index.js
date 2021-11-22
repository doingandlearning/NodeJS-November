const http = require("http");

const userStore = [
  {
    id: 1,
    name: "Kevin",
    role: "Instructor",
    location: "Northern Ireland",
  },
];

http.createServer((req, res) => {
  // Use req.url to filter on route
  // Use req.method to decide on function
  // Use req.headers to decide on how to parse the body
  res.end("This is a work in progress.");
});

// TODO:
// - Add CRUD functionality to our in memory userStore over HTTP
// - Decide if route or verb is the right way to handle it
// -
