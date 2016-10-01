var path = require('path');

function testFunction(data) {
  return data;
}

module.exports = function(app) {

  app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });

  app.post('/api/facialData', function(req, res) {
    console.log("Posted!!!");
  })

  console.log(testFunction());
}
