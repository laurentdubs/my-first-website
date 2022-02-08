import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.sendFile("/Users/leroymerlin/Workspace/my-first-website/src/index.html");
});

app.get("/page2", (request, response) => {
  response.sendFile("/Users/leroymerlin/Workspace/my-first-website/src/page2.html");
});

app.get("/page3", (request, response) => {
  response.sendFile("/Users/leroymerlin/Workspace/my-first-website/src/page3.html");
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});
