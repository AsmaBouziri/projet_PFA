const app = require('./config/express.')
const config =require ('./config/config');

require('./db');

//const path= require('path');
//const port = 3000
//const destinationDir = path.join(__dirname,'../dist');
/*

var utilisateurController =require('./controller/utilisateurcontoller');
app.get('/', (req, res) => {
    res.sendFile(path.join(destinationDir,'index.html'));
})
app.use('./utilisateur',utilisateurController);


app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}")
})
*/
app.listen(config.port,()=> console.log('sever is running from port ',config.port,'(',config.env,')'));
