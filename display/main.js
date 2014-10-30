$(document).ready(function(){
	var myFirebaseRef = new Firebase("https://tadka.firebaseio.com/");
	myFirebaseRef.child("sex").on("value", function(snapshot) {
	  	$("#display").text(snapshot.val());
	});

});
