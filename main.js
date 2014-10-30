$(document).ready(function(){
	var myFirebaseRef = new Firebase("https://tadka.firebaseio.com/");
	myFirebaseRef.set({
	  	sex : 0
	});

  	$("#nothing").click(function(){
		myFirebaseRef.set({
		  	sex : 0
		});    
  	});
  	$("#1").click(function(){
		myFirebaseRef.set({
		  	sex : 1
		});     
  	});
  	$("#2").click(function(){
		myFirebaseRef.set({
		  	sex : 2
		});     
  	});
  	$("#3").click(function(){
		myFirebaseRef.set({
		  	sex : 3
		});     
  	});
  	$("#4").click(function(){
		myFirebaseRef.set({
		  	sex : 4
		});     
  	});
});