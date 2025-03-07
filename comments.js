// Create web server
// 1. Import http module
const http = require('http');
// 2. Create server
const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        res.write('Here are the comments');
        res.end();
    }
});
// 3. Listen on port 3000
server.listen(3000);
console.log('Listening on port 3000...');