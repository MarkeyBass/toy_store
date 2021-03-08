const fs = require('fs');

class FileService{
  
  readFromFile(path, callback) {
    fs.readFile(path, 'utf-8',(err, data) => {
      if(err) {
        console.log(err);
        callback(err, null)
      } else {
        callback(null, data)
      }
    });
  }

  writeToJsonFile(path, content, callback) {
    let dataArr = [];
    fs.readFile(path, 'utf-8' ,(err, data) => {
      if(err) {
        callback(err, null);
      }
      dataArr = JSON.parse(data);
      dataArr.push(content);
      fs.writeFile(path, JSON.stringify(dataArr) , (err) => {
        if(err) {
          callback(err, null);
        } else {
          callback(null, 'success');
        }
      })
    });
  }

}



module.exports = {
  FileService: FileService
}

