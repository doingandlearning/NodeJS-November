const http = require("http");
const port = 3000;

let userStore = [
  {
    id: 1,
    name: "Kevin",
    role: "Instructor",
    location: "Northern Ireland",
  },
];

let id = 1;

const app = http.createServer();

// TODO:
// - Add CRUD functionality to our in memory userStore over HTTP
// - Decide if route or verb is the right way to handle it
// -

app.on("request", (request, response) => {
  if (request.method === "POST") {
    handlePost(request, response);
  } else if (request.method === "PATCH") {
    handlePatch(request, response);
  } else if (request.method === "DELETE") {
    handleDelete(request, response);
  } else if (request.method === "GET") {
    handleGet(request, response);
  }
  // let body = [];
  // request.on("data", (bodyData) => body.push(bodyData));
  // request.on("end", () => {
  //   body = Buffer.concat(body).toString();
  //   console.log(`Request Body Contents: ${body}`);
  //   response.write(
  //     `<code>Request Body Contents: ${JSON.stringify(body)}</code>`
  //   );
  //   response.end();
  // });
});

function handlePost(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  let body = [];
  request.on("data", (bodyData) => body.push(bodyData));

  request.on("end", () => {
    body = Buffer.concat(body).toString();
    const newUser = JSON.parse(body);
    newUser.id = ++id;
    userStore.push(newUser);
    response.write("New user added.");
    response.end();
  });
}

function handleGet(request, response) {
  const id = request.url.split("/")[1];
  if (id) {
    // some logic in here
  } else {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(userStore));
    response.end();
  }
}

function handleDelete(request, response) {
  const id = request.url.split("/")[1];
  userStore = userStore.filter((user) => user.id !== Number.parseInt(id));

  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(userStore));
  response.end();
}

function handlePatch(request, response) {
  const id = request.url.split("/")[1];

  const tempStore = userStore.filter((user) => user.id !== Number.parseInt(id));
  const userToUpdate = userStore.filter(
    (user) => user.id === Number.parseInt(id)
  )[0];

  let body = [];

  request.on("data", (bodyData) => body.push(bodyData));

  request.on("end", () => {
    body = Buffer.concat(body).toString();
    const userUpdates = JSON.parse(body);
    const updatedUser = { ...userToUpdate, ...userUpdates };
    userStore = [...tempStore, updatedUser];
    response.write("Updated user.");
    response.end();
  });
}

app.listen(port);

console.log("Server is running.");
