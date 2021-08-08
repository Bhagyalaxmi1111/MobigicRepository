const connection = require('./connection');

module.exports = {
  loginUser: function (email, callback) {
    console.log("login fun");
    connection.query(`select * from registration where email='${email}'`, function (err, result) {
      if (err) {
        console.log("err:", err);
      } else {
        callback(result);
      }
    });
  },
  Newregistration:  (data, callback) =>{
    let qury = `INSERT INTO registration(regid, email, password) VALUES  
    (0,'${data.email}','${data.hash}')`;
    console.log(qury);
    connection.query(qury,  (err, result) =>{
      if (err) {
        console.log("err:", err);
      } else {
        callback(result);
      }
    });
  },



//   GetAllemployees:  (callback)=> {
//     let qury = `Select empid,name,Mobile,desg, Dept_ID from employee`;
//     connection.query(qury,(err, result) =>{
//       if (err) {
//         console.log("err:", err);
//       } else {
//         callback(result);
//       }
//     });
//   },
//   getemp: function (id, callback) {
//     connection.query("Select empid, name, Mobile, email, desg , Dept_ID from employee where empid=" + id, function (err, result) {
//       if (err) {
//         console.log("err:", err);
//       } else {
//         callback(result);
//       }
//     });
//   },

//   Removeemp: function (id, callback) {
//     connection.query("DELETE FROM employee WHERE empid=" + id, function (err, result) {
//       if (err) {
//         console.log("err:", err);
//       } else {
//         callback(result);
//       }
//     });
//   },

//   Updateemp: function (data, empid, callback) {
//     connection.query("UPDATE employee SET name=" + JSON.stringify(data.name) + ",Mobile=" + JSON.stringify(data.Mobile) + ",email=" + JSON.stringify(data.email) + ",desg=" + JSON.stringify(data.desg) + "Dept_ID="+ JSON.stringify(data.Dept_ID) + " WHERE empid=" + empid, function (err, result) {
//       if (err) {
//         console.log("err:", err);
//       } else {
//         callback(result);
//       }
//     });
//   },
}