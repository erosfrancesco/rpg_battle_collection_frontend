const path = require('path');
const app = require("express")();

process.env.PORT = process.env.PORT || 80;

app.get('/*', (req,res) => res.sendFile(path.join(__dirname+'/dist/index.html')) );

const serverInitResponseHandler = error => console[error ? `error` : `log`](error ||  `server listening on port ${process.env.PORT}`); 
app.listen(process.env.PORT, serverInitResponseHandler);