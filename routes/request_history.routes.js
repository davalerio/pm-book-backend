const express = require("express");
const router = express.Router();
const mysqlConnection = require("../config/db");

// List request_history
router.get("/request_history", (req, res) => {
  const query = "SELECT * FROM request_history WHERE state = 1";
  mysqlConnection.query(query, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      console.log(err);
    }
  });
});

// correlative
router.get("/correlative", (req, res) => {
  const query = "SELECT MAX(correlative) AS correlative FROM request_history";
  mysqlConnection.query(query, (err, data) => {
    if (!err) {
      
      const maxCorrelative = data[0].correlative;
      const siguiente = maxCorrelative
        ? (parseInt(maxCorrelative) + 1).toString()
        : "00001";
      const numerofinal = siguiente.padStart(5, "0");
      res.json(numerofinal);
    } else {
      console.log(err);
    }
  });
});


// Insert request_history
router.post("/request_history/add", (req, res) => {
  try {
    const query2 = "SELECT MAX(correlative) AS correlative FROM request_history";
    mysqlConnection.query(query2, (err, data) => {
        const maxCorrelative = data[0].correlative;
        const siguiente = maxCorrelative
          ? (parseInt(maxCorrelative) + 1).toString()
          : '00001';
        // const siguiente = (parseInt(maxCorrelative) + 1).toString();
        const numerofinal = siguiente.padStart(5, "0");
        console.log(numerofinal);

        var serie = '001';
        var correlative = numerofinal;
        var ruc = req.body.ruc;
        var business = req.body.business;
        var document_id = req.body.document_id;
        var document_num = req.body.document_num;
        var first_name = req.body.first_name;
        var father_surname = req.body.father_surname;
        var mother_surname = req.body.mother_surname;
        var email = req.body.email;
        var phone = req.body.phone;
        var address = req.body.address;
        var department_id = req.body.department_id;
        var province_id = req.body.province_id;
        var district_id = req.body.district_id;
        var service_id = req.body.service_id;
        var amount = req.body.amount;
        var request_id = req.body.request_id;
        var day = req.body.day;
        var hour = req.body.hour;
        var agency_id = req.body.agency_id;
        var message = req.body.message;

        const query = `INSERT INTO request_history (serie, correlative, ruc, business, document_id, document_num, first_name, father_surname, mother_surname, email, phone, address, department_id, province_id, district_id, service_id, amount, request_id, day, hour, agency_id, message) VALUES
       ('${serie}',
          '${correlative}',
          '${ruc}',
          '${business}',
          '${document_id}',
          '${document_num}',
          '${first_name}',
          '${father_surname}',
          '${mother_surname}',
          '${email}',
          '${phone}',
          '${address}',
          '${department_id}',
          '${province_id}',
          '${district_id}',
          '${service_id}',
          '${amount}',
          '${request_id}',
          '${day}',
          '${hour}',
          '${agency_id}',
          '${message}')
        `;
        mysqlConnection.query(query, (data) => {
          res.status(200).json({ message: "Data inserted successfully." });
        });
    });
  } catch (error) {
    console.error("Error inserting data", error);
    res.status(500).json({ error: "Error inserting data." });
  }
});

// router.post("/record/add", (req, res) => {
//   const values = req.body;
//   const query = "INSERT INTO record SET ?";
//   const test = "SELECT MAX(correlative) AS correlative FROM record";

//   mysqlConnection.query(test, (err, data) => {
//     if (!err) {
//       res.json(data);
//       const maxCorrelative = data[0].correlative;
//       const siguiente = maxCorrelative
//         ? (parseInt(maxCorrelative) + 1).toString()
//         : 1;
//       const correlative = siguiente.padStart(5, "0");
//       console.log(numerofinal);
//     } else {
//       console.log(err);
//     }
//   });

//   mysqlConnection.query(query, [values], [correlative], (err, data) => {
//     if (!err) {
//       res.json({ status: "successfull" });
//     } else {
//       console.log(err);
//     }
//   });
// });

module.exports = router;
