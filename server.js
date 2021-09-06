require('dotenv').config();
const http = require('http');

const app = require('./src/app');

// Basic Configuration
const port = process.env.PORT || 3000;
const server = http.createServer(app)


server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
