/**
 * GET /
 */
exports.newusers = function(req, res) {
 	
	var sql = require("seriate");

	// Change the config settings to match your
	// SQL Server and database
	var config = {
	    "server": "sql.steemsql.com",
	    "user": "steemit",
	    "password": "steemit",
	    "database": "DBSteem"
	};

	sql.setDefaultConfig( config );

	sql.execute( {
	        query: sql.fromFile( "../queries/getNewUsers.sql" )
	        // query: "SELECT * FROM ACCOUNTS WHERE NAME = 'vallesleoruther'"
	    } ).then( function( results ) {
	    	var objectsize = Object.keys(results).length;
	    	var queryName = "New"
	    	var content = "Total Number of New Users in the Last 30 Days";
	    	res.render('inner', {data:results, error:null, size: objectsize, queryname: queryName, content: content, title: queryName});
	    }, function( err ) {
	        res.render('deadlock', {error: err});
    } );

};
