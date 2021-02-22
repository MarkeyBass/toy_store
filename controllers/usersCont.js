const path = require('path');
const fs = require('fs');

const sendUsersPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..','public', 'users.html'));
};

// get all users
const getAllUsers = (req, res) => {
  fs.readFile(path.join(__dirname, '..','models', 'users.json'), 'utf-8',(err, data) => {
    if(err) console.log(err);
    console.log("data: ", data);
    // res.setHeader("Access-Control-Allow-Origin","localhost:3000");
    res.json(JSON.parse(data));
  });
};

// post a user
const addUser = (req, res) => {
  console.log(req.body)
  let dataArr = [];
  fs.readFile(path.join(__dirname, '..','models', 'users.json'), 'utf-8' ,(err, data) => {
    if(err) console.log(err);
    console.log(data);
    dataArr = JSON.parse(data);
    dataArr.push(req.body);
    console.log(dataArr);
    
    fs.writeFile(path.join(__dirname, '..','models', 'users.json'), JSON.stringify(dataArr) , (err, data) => {
      if(err) console.log(err);
    })
  });
};

module.exports = {
  sendUsersPage,
  getAllUsers,
  addUser
}