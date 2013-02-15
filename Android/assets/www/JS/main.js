
$(document).ready(function(){
	Parse.initialize("HbvSRexESsVYI6fd1ilUkJ21F3HegsSZeBkeoX64", "H3wq4OAJMmXd8gnKDLYy1hCWjNa73VGlVlAfWeiH");
	
 	sessions = Parse.Object.extend("sessions");
 	
 	
	 	
 		
 		/*query.find({
 			success:function(results){
 				console.dir(results);
 				var s="";
 				for(var i=0, len=results.length; i<len; i++){
 					var sess = results[i];
 					s += "<p>";
 					s += "<b>" + sess.get("ID") + "</b><br>";
 					s += "<b>" + sess.get("Name") + "</b><br>";
 					s += "<b>" + sess.get("Time") + "</b><br>";
 					s += "</p>";
 				}
 				$("#sessCall").html(s);
 			},
 			error:function(error){
 				alert("Error when getting session!");
 			}
 		});
 	}
 	getSession();*/
 	
});

function getSess(){
	window.location = "checkInInfo.html";
}

function getSession(){
	 		var query = new Parse.Query(sessions);
	 		
	 		var sessID = document.getElementById('eventID').value;
	 		
	 		query.find({
	 			success:function(results){
	 				console.dir(results);
	 				var s ="";
	 				for(var i=0, len=results.length; i<len;i++){
	 					var sess = results[i];
	 					if(sess.get("ID") == sessID){
	 						s += "<p>";
	 						s += "<b>Event ID:</b>" + sess.get("ID") + "<br>";
	 						s += "<b>Name:</b>" + sess.get("Name") + "<br>";
	 						s += "<b>Time:</b>" + sess.get("Time") + "<br>";
	 						s += "<p>";
	 						$("#disSess").html(s);
	 						
	 					}
	 				}
	 			},
	 			error:function(error){
	 				alert("Coudnt find ");
	 			}
	 		});
 		}
 