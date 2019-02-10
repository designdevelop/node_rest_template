const express = require('express');
var mysql      = require('mysql');
var dbconfig = require('../config/database.js');
var pool = mysql.createConnection(dbconfig);
// const app = express();
const jwt = require('jsonwebtoken')

exports.login = function(req, res){
	let response = {"result" : "success"};
	const secret = req.app.get('jwt-secret')


	let userId = "user";
	let name = "Robert"

	const p = new Promise((resolve, reject) => {
		jwt.sign(
			{
				_id: userId,
				username: name
			}, 
			secret, 
			{
				expiresIn: '7d',
				issuer: 'designdevelop.com',
				subject: 'userInfo'
			}, (err, token) => {
				if (err) reject(err)
				resolve(token) 
			})
	})

	p.then((token) => {
		let resultItem = {userId : userId, name : name};
		resultItem.signature = token;
		delete resultItem.passwd;
		response.result = resultItem;
		res.send(response);
	})
}


// list
exports.get = function(req, res){

    let response={"result" : null};
    
    // res.send(response)

    pool.query('SELECT * from USER_TBL', function(err, rows) {

	    if(err){ 
	    	return res.send(err);
	    }

	    response.result = rows;
	    
	    res.send(response);
	})

}

// add
exports.post = function(req, res){

    let response={"result" : null};
    
    res.send(response);

	// let bodyParam = req.body;
	// let query = 'insert into USER_TBL (userId, passwd, name, phone, email, gender, nickname, profile) value("'
	//  + bodyParam.userId + '","' + bodyParam.passwd + '","' + bodyParam.name + '","' + bodyParam.phone + '","' + bodyParam.email 
	//  + '","' + bodyParam.gender + '","' + bodyParam.nickname + '","' + bodyParam.profile + '")'
	
	// pool.query(query, function(err, rows) {
	//     if(err){ 
	//     	return res.send(err);
	//     }

	//     response.result = bodyParam;

	//     res.send(response);
	// })
}


















