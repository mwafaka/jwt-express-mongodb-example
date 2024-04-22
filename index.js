const http = require("http");
const app = require("./app");
const express = require("express");
/* option 1 with createServer  */
const server = http.createServer(app);


/* option 2 with express  */
const serv = express()
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

serv.listen(port, () => {
  console.log(`Server running on  port ${port}`);
});
