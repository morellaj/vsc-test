const express = require('express');

const app = express();

app.use('/dist', express.static(`${process.cwd()}/dist`));
app.use(express.static('dist'));

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/src/index.html`);
});


var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
