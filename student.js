function Student(name, gender, gpa, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.gpa = gpa;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function(){
		if((this.detentions < 10) && (this.gpa > 2)){
			console.log("Student can have fun!");
		} else{
			console.log("NO FUN FOR THIS STUDENT!");
		}
	}
}

console.log("Enter the student's information!");

prompt.start();

prompt.get(['name', 'gender', 'grade','gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
		newResult = result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase;
		var newStudent = new Student(newResult);
		// newStudent.name

		// newStudent.name = result.name;
		// console.log(newStudent.name);
		// var s = JSON.stringify(newStudent[1]);
		console.log("This is " + newStudent.name);
		newStudent.canStudentHaveFun();
})