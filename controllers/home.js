/**
 * GET /
 */
exports.index = function(req, res) {

	var sql = require("seriate");

	var config = {
	    "server": "sql.steemsql.com",
	    "user": "steemit",
	    "password": "steemit",
	    "database": "DBSteem"
	};

	sql.setDefaultConfig( config );

	sql.execute( {
	        query: sql.fromFile( "../queries/getAllUsers.sql" )
	    } ).then( function( results ) {
	    	var objectsize = Object.keys(results).length;
	    	res.render('home', {data:results, error:null, size: objectsize, title: 'Home'});
	    }, function( err ) {
	    	console.log(err);
	        res.render('deadlock', {error: err});
    });
};
