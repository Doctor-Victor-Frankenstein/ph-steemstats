/**
 * GET /
 */
exports.inactive = function(req, res) {
 	
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
	        query: sql.fromFile( "../queries/getInactiveUsers.sql" )
	        // query: "SELECT * FROM ACCOUNTS WHERE NAME = 'vallesleoruther'"
	    } ).then( function( results ) {
	    	var objectsize = Object.keys(results).length;
	    	var queryname = "Inactive";
	    	var content = "Total Number of Inactive Users who has not been active in the last 30 days, using the parameter Last Upvote Time";
	    	res.render('inner', {data:results, error:null, size: objectsize, queryname: queryname, content: content});
	    }, function( err ) {
	        res.render('deadlock', {error: err});
    } );

};
