const http = require("http");
const port = 3000;

const app = http.createServer();

app.on("request", (request, response) => {
  console.log("Received an incoming request!");
  response.writeHead(200, { "Content-Type": "text/html" });

  let responseMessage = "<h1>Welcome to our site!</h1>";
  console.log(request.method);
  console.log(request.headers["Content-Type"]);
  if (request.method === "POST") {
    let body = [];
    request.on("data", (bodyData) => body.push(bodyData));
    request.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`);
      response.write(
        `<code>Request Body Contents: ${JSON.stringify(body)}</code>`
      );
      response.end();
    });
  } else {
    response.write(responseMessage);
    response.end();

    console.log(`Sent the response of ${responseMessage}`);
  }
});

app.listen(port);

console.log("Server is running.");
