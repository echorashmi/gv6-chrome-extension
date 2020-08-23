// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const http = require('http');
const qs = require('querystring');
const url = require('url');

const Config = require('.././model.js');

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
    if (req.method === 'GET'){
        return handleGetReq(req, res);
    }
    else if (req.method === 'POST'){
        return handlePostReq(req, res);
    }
});

function handleGetReq(req, res) {
    const { pathname } = url.parse(req.url)
    if (pathname !== '/config') {
        return handleError(res, 404)
    }
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    return res.end(JSON.stringify(Config.accessConfig('get', {})))
}

function handlePostReq(req, res) {

    const size = parseInt(req.headers['content-length'], 10)
    const buffer = Buffer.allocUnsafe(size)
    var pos = 0

    const { pathname } = url.parse(req.url)
    if (pathname !== '/config') {
        return handleError(res, 404)
    }

    req 
    .on('data', (chunk) => { 
      const offset = pos + chunk.length 
      if (offset > size) { 
        reject(413, 'Too Large', res) 
        return 
      } 
      chunk.copy(buffer, pos) 
      pos = offset 
    }) 
    .on('end', () => { 
      if (pos !== size) { 
        reject(400, 'Bad Request', res) 
        return 
      }

      const data = JSON.parse(buffer.toString());
      
      Config.accessConfig('post', data);
      console.log('User Posted: ', data);
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      res.end('You Posted: ' + JSON.stringify(data));
    })
}

function handleError (res, code) { 
    res.statusCode = code 
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`) 
} 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
