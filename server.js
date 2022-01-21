const express = require('express');
const utilits = require('./src/utilits.js');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.send(
    {
      message: 'Hello World!',
      status: 'OK',
      data: {
        name: 'John',
        age: '25',
      },
      test: 'test'
    }
  );
});

app.post('/handle', (request, response) => {
  log('handle', request.body);
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  response.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening at http://45.79.216.143:${port}`);
});