const express = require('express');
const path = require('path'); // path lets us navigate the file system

// heroku assigns a port when it deploys via the process
//locally this will run @ port 3000; remotely it'll run whenever heroku tells it to run
const port = process.env.PORT || 3000; // this || means double pipe

const app = express();
app.use(express.static('public'));



app.get('/', (req, res) => {
  console.log('at home route')
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/media', (req, res) => {
    console.log('at media route')
    res.sendFile(path.join(__dirname + '/views/media.html'))
});





 app.listen(port, () => {
   console.log(`Server running at ${port}`);
 });

