  var fb = new Firebase("https://shibe-games.firebaseio.com/recommendations/moolah");
var recommend = function (userEmail, userFeedback) {
    alert("sending feedback"); /*Popup window*/
    document.getElementById("headBack").style.display = "inline";
    var userFeedback = document.getElementById("game-title").value;
    var userEmail = document.getElementById("email").value;
 	fb.push({email: userEmail, feedback: userFeedback}); /*Pushes data to firebase*/
 	document.getElementById("instructions").innerHTML = "Recommendation recieved! You can recommend another here if you want, or head back to our main page for more awesome sales." ;
    return false;
}



