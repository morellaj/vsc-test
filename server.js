var express = require('express');
var app = express();

app.use('/dist', express.static(process.cwd() + '/dist'));
app.use(express.static('dist'));

app.get("*", function(request, response) {
  response.sendFile(__dirname + '/src/index.html');
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
