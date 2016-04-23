var Student = require('./student.js');

function Bus(driverName, color, gas){
	var thisBus = this;

	this.studentsOnTheBus = [];
	this.driverName = "";
	this.color = "";
	this.gas = 0;
	this.studentEntersBus = function(name, gender, gpa, detentions, sleepingInClass, catchPhrase){
		thisBus.studentsOnTheBus.push(Student.coolStudent);
		console.log(thisBus.studentsOnTheBus);
	}
	this.busChatter = function(studentsOnTheBus){
		for(var i = 0; i < studentsOnTheBus.length; i++){
			if(thisStudent[i].canStudentHaveFun == true){
				console.log(thisStudent[i].catchPhrase);
			}
		}
	}
}

module.exports = Bus;