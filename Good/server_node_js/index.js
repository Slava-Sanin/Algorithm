const express = require("express");
//const bodyParser = require("body-parser");
const mysql = require("mysql");
//const fs = require("fs");
const app = express();


	var connection = mysql.createPool({
	  connectionLimit: 50,
	  host: "sql12.freesqldatabase.com",
	  user: "sql12304235",
	  password: "1Hj5jAY7Bv",
	  database: "sql12304235"
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	app.post("/insert", function(req, resp) {
	  console.log(req);
	  connection.getConnection(function(error, tempCont) {
		if (error) {
					 tempCont.release();
					 console.log("Error");
				   } else {
							 console.log("Connected! Inserting...");
							  
							 let some_data = req['some_data'];
							 let to_table = req['to_table'];
							 //let for_id = req['for_id'];

									   // INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);										
							 let query = "INSERT INTO to_table (some_place) VALUES (some_data) ";      

							 tempCont.query(query, function(error, rows, fields) {
								if (error) {
								  console.log("Error in the query");
								} else {
								  //resp.json(rows);
								}

								tempCont.release();
							  });

						  }
	  });
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	app.post("/update", function(req, resp) {
	  console.log(req);
	  connection.getConnection(function(error, tempCont) {
		if (error) {
					 tempCont.release();
					 console.log("Error");
				   } else {
							 console.log("Connected! Updating...");
							  
							 let some_data = req['some_data'];
							 let to_table = req['to_table'];
							 let for_column = req['for_column'];
							 let for_id = req['for_id'];
							
							// UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;		
							 let query = "UPDATE to_table SET for_column = some_data WHERE ID = for_id ";      

							 tempCont.query(query, function(error, rows, fields) {
								if (error) {
								  console.log("Error in the query");
								} else {
								  //resp.json(rows);
								}

								tempCont.release();
							  });

						  }
	  });
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	app.post("/delete", function(req, resp) {
	  console.log(req);
	  connection.getConnection(function(error, tempCont) {
		if (error) {
					 tempCont.release();
					 console.log("Error");
				   } else {
							 console.log("Connected! Deleting...");							 
							 
							 let from_table = req['from_table'];
							 let what_id = req['what_id'];
									
							 // DELETE FROM table_name WHERE condition;									
							 let query = "DELETE from_table WHERE ID = what_id ";      

							 tempCont.query(query, function(error, rows, fields) {
								if (error) {
								  console.log("Error in the query");
								} else {
								  //resp.json(rows);
								}

								tempCont.release();
							  });

						  }
	  });
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	app.get("/", function(req, resp) {
	  connection.getConnection(function(error, tempCont) {
		if (error) {
		  tempCont.release();
		  console.log("Error");
		} else {
		         console.log("Connected!");
		         tempCont.query("SELECT * FROM visitor", function(error, rows, fields) {
			     tempCont.release();
			     if (error) {
			                  console.log("Error in the query");
							} else {
									 resp.json(rows);
								   }
				});
			  }
	  });
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	app.get("/json", function(req, resp) {
	  resp.sendFile("data.json"), { root: path.join(__dirname, "./data") };
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	app.listen(8080, () => {
	  console.log("Server running on http://localhost:8080");
	});
