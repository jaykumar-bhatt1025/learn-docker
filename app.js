const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
  res.status(200).send('Hello I am new docker App');
});

app.listen(port,()=>{
  console.log(`updated App running on ${port}`);
});