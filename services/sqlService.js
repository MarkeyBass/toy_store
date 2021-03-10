const mysql = require('mysql2');

class SqlService {
  constructor () {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "toy_store",
      password: "HansaSpiti2008"
    });

    // USERS QUERIES
    this.SELECTALLUSERS = `SELECT * FROM users`;
    this.ADDUSER = `INSERT INTO users SET ?`;
    
    // PRODUCTS QUERIES
    this.SELECTALLPRODUCTS = `SELECT * FROM products`;
    this.ADDPRODUCT = `INSERT INTO products SET ?`;
  }

  // USERS DB SERVICES
  
  selectAllUsers(callback) {
    this.connection.query("SELECT * FROM users", (err, results) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }

  addUser(userData, callback) {
    this.connection.query(this.ADDUSER, userData,(err, results) => {
      if(err) {
        callback(err, null);
        // debuging
       } else {
        callback(null, results);
        // debuging
        console.log("succsses userData: ", { userData });
      }
    });
  }
  
  
  // PRODUCTS DB SERVICES
  
  selectAllProducts(callback) {
    this.connection.query(this.SELECTALLPRODUCTS, (err, results) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
  
  addProduct(productData, callback) {
    this.connection.query(this.ADDPRODUCT, productData,(err, results) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }

}

module.exports = {
  SqlService
}