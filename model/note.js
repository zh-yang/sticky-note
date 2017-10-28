var path = require('path')
var Sequelize = require('sequelize')

var sequelize = new Sequelize(undefined,undefined,undefined,{
	host: 'localhost',
	dialect: 'sqlite',

	storage: path.join(__dirname,'../database/database.sqlite')
})

/*
sequelize
	.authenticate()
	.then(function (err) {
		console.log('Success')
	})
	.catch(function (err) {
		console.log('False')
	})
*/

var  Note = sequelize.define('note',{
	text: {
		type: Sequelize.STRING
	},
	uid: {
		type: Sequelize.STRING
	},
	uname: {
		type: Sequelize.STRING
	}
})

//Note.sync({force:true})
/*Note.drop()
Note.sync()

Note.create({
	text: 'hello word'
})*/

/*Note.findAll({raw:true,where:{id:1}}).then(function(notes){
	console.log(notes)
})*/

module.exports.Note = Note