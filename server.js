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
    if (err) {
      response.status(500).send(err);
    }
  });
});


// eslint-disable-next-line no-unused-vars
const listener = app.listen(process.env.PORT, () => {

});
