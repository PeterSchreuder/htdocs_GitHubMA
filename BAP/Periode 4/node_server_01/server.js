let http = require('http');
let server = http.createServer();

server.on('request',(req,res)=>{
  res.write('hallo wereld');
  res.end();
});

server.listen(3000,()=>{
  console.log('server listens to port 3000');
});
