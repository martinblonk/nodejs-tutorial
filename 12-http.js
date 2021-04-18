const http = require('http');

const server = http.createServer( (req, res) => {
  if (req.url === '/'){
    res.end('Welcome to our homepage');
  } else if (req.url === '/about'){
    res.end('Here is our brief story');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <br>
      <p>We can't seem to find the page you are looking for</p>
      <br>
      <a href="/">back home</a>
    `);
  }
}).listen(5000);