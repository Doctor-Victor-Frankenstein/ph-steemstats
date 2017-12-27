/**
 * GET /
 */
exports.about = function(req, res) {
 	
	// var sql = require("seriate");

	// // Change the config settings to match your
	// // SQL Server and database
	// var config = {
	//     "server": "sql.steemsql.com",
	//     "user": "steemit",
	//     "password": "steemit",
	//     "database": "DBSteem"
	// };

	// sql.setDefaultConfig( config );
	res.render('about', {title: 'About'});
};