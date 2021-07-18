const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

const PORT = 5500;

app.use(express.static('css'));
app.use(express.static('fonts'));
app.use(express.static('images'));
app.use(express.static('script'));

app.use(express.static('css'));

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.use(cookieParser());

app.post('/server.php', (req, response) => {
	setTimeout(() => {
		return response.status(200).json({ message: 'success' });
	}, 3000)
});

app.get('/', (req, res) => {
  const htmlPath = `${__dirname}/dist/index.html`;
  res.sendFile(htmlPath);
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`\n server start ${PORT}\n`);
});


