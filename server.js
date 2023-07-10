const express = require('express');
const cors= require('cors');
const app= express();
const mysql= require('mysql2');




const connection = mysql.createConnection({
  host:'27.107.114.34',
  user: 'root',
  password: 'manager',
  database: 'sdm'
});

app.use(cors('*'));

app.get('/',(req,res)=>{
    //res.send('hii there dddd')

   
    connection.query(
        'select * from emp ;',
        function(err, results, ) {

          if(err)
          {console.log(err); }
          else{
            res.json(results);

          }
        
        }
      );

})

app.post('/', (req, res) => {
  const query = `INSERT INTO emp (empid, name, email, password, dname, dobj) VALUES ('2', 'uuXX', 
  'VFS', 'SDV', 'DAV', 'DV')`;
  console.log(query);

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(results);
      res.json({ message: 'insert successful' });
    }
  });
});


app.delete('/', (req, res) => {
  const query = `delete from emp where empid=2`;
  console.log(query);

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(results);
      res.json({ message: 'delete successful' });
    }
  });
});

app.put('/', (req, res) => {
  const query = `update emp set ename='HHHH' where empid=2`;
  console.log(query);

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(results);
      res.json({ message: 'delete successful' });
    }
  });
});




app.listen(4000,()=>{
    console.log('server started on 4000')
})











