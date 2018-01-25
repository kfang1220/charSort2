const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.get('/', (req,res) => {
  console.log('hello');
})

app.listen(3000, ()=> {
  console.log('Listening on port 3000!')
})
