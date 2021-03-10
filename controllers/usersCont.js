const path = require('path');
const { SqlService } = require('../services/sqlService');

class UsersCont {
  constructor () {
    this.sqlService = new SqlService();
  }


  sendUsersPage = (req, res) => {
    res.render('users', { title: "Users" });
  }


  getAllUsers = (req, res) => {
    this.sqlService.selectAllUsers((err, users) => {
        if(err) {
          console.log(err);
          res.status(400).send(`<h1>Can't get users information: Status: 400</h1>`)
        }
        console.log('successfull GET req was made from USERS');
        res.render('all_users', { 
          title: "Users",
          users
        });
    });
  };

  showUserForm = (req, res) => {
    console.log("hited /users/show_user_form rout")
    res.render('show_user_form', { title: "Users" });
  };
  
  addUser = (req, res) => {
    this.sqlService.addUser(req.body, (err, msg) => {
      if(err) {
        console.log(err);
        res.status(400).send(`<h1>Unable to post USERS data: Status: 400</h1>`)
      } else {
        res.redirect(301, "users/all_users");
      }
    });
  }


}



module.exports = { usersCont: new UsersCont() };
