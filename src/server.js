const server () => {

const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http');


const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

const PORT = 5500;

app.use(express.static('/'));
//app.use('/public', express.static(__dirname + '/public'));
app.use(cookieParser());

app.get('*', (req, res) => {
  const htmlPath = `${__dirname}/index.html`;
  res.sendFile(htmlPath);
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`\n  🚀  App ready on port ${PORT}\n`);
});
};
export default server;