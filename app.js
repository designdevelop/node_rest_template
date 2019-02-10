/**=======================
 *  LOAD THE DEPENDENCY
 ======================== */

 const express = require('express');
 const bodyParser = require('body-parser');
 
 /**=======================
  *  LOAD THE CONFIG
  ======================== */
 const config = require('./config/token');
 
 
 /**=======================
  *  EXPRESS CONFIGURATION
  ======================== */
 const app = express();
 let cors = require('cors')
 
 // cross origin allow
 app.use(cors());
 

 // set sceret key variable for jwt
app.set('jwt-secret', config.secret);

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello World!\n');
});

app.use('/user', require('./routes/user'));
  

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
  
  