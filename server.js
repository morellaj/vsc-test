const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const app = express();

app.use(expressStaticGzip(path.join(__dirname, 'dist'), {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz',
  }],
  orderPreference: ['br'],
}));

app.get('/*', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`, (err) => {
    console.log('test');
    if (err) {
      response.status(500).send(err);
    }
  });
});


var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
