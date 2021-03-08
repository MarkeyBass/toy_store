const path = require('path');
const { FileService } = require('../services/fileService');

class UsersCont {
  constructor () {
    this.fileService = new FileService();
  }

  sendUsersPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..','public', 'users.html'));
  };

  getAllUsers = (req, res) => {
    this.fileService.readFromFile(path.join(__dirname, '..','models', 'users.json'), (err, data) => {
        if(err) {
          console.log(err);
          res.status(400).send(`<h1>Can't get the data: Status: 400</h1>`)
        }
        console.log('successfull GET req was made from USERS');
        res.send(data);
    });
  };

  addUser = (req, res) => {
    this.fileService.writeToJsonFile(path.join(__dirname, '..','models', 'users.json'), req.body, (err, msg) => {
      if(err) {
        console.log(err);
        res.status(400).send(`<h1>Unable to post the data: Status: 400</h1>`)
      } else {
          res.status(200).json({
          msg: "User added successfully...",
          status: 200,
        });
      }
    });
  
  };
}


module.exports = { usersCont: new UsersCont() };
