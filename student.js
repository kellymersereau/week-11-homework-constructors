var prompt = require('prompt');

prompt.start();

function Student(name, gender, gpa, detentions, sleepingInClass, catchPhrase){
	thisStudent = this;
	coolStudent = {};

	this.name = name;
	this.gender = gender;
	this.gpa = gpa;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.fun = false;
	this.canStudentHaveFun = function(){
		if((this.detentions < 10) && (this.gpa > 2)){
			thisStudent.fun = true;
			console.log("Student can have fun!");
		} else{
			thisStudent.fun = false;
			console.log("NO FUN FOR THIS STUDENT!");
		}
	}
	this.getInfo = function(){
		prompt.message = colors.blue('Enter student information');

		prompt.get(['name', 'gender', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){

			coolStudent = new Student(result.name, result.gender, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

			coolStudent.canStudentHaveFun();

			coolBus.studentEntersBus();
		})
	}
}




module.exports = Student;

