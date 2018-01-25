const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.get('/', (req,res) => {
  console.log('hello');
})

app.post('/', (req,res) => {
  res.send(sort(req.body.input))
})

//functions, i could create another file but a small function alone in a file seems pointless
//function breaks the string sorts and joins back to return
const sort = (string) => {
  return string.split('').sort().join('')
}

app.listen(3000, ()=> {
  console.log('Listening on port 3000!')
})
