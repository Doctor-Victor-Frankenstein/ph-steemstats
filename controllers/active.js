/**
 * GET /
 */
exports.active = function(req, res) {
 	
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
	        query: sql.fromFile( "../queries/getActiveUsers.sql" )
	        // query: "SELECT * FROM ACCOUNTS WHERE NAME = 'vallesleoruther'"
	    } ).then( function( results ) {
	    	var objectsize = Object.keys(results).length;
	    	var queryname = "Active";
	    	var content = "Total Number of Users Active in the last 30 days, using Last Upvote Time as basis";
	    	res.render('inner', {data:results, error:null, size: objectsize, queryname: queryname, content: content, title: queryname});
	    }, function( err ) {
	        res.render('deadlock', {error: err});
    } );

};