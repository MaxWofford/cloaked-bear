  var fb = new Firebase("https://shibe-games.firebaseio.com/recommendations/moolah/summer-sale");
var recommend = function (userEmail, userFeedback, userReddit) {
    alert("sending feedback"); /*Popup window*/
    document.getElementById("headBack").style.display = "inline";
    var userFeedback = document.getElementById("game-title").value;
    var userReddit = document.getElementById("reddit").value;
    var userEmail = document.getElementById("email").value;
 	fb.push({reddit: userReddit, email: userEmail, feedback: userFeedback}); /*Pushes data to firebase*/
 	document.getElementById("instructions").innerHTML = "Recommendation recieved! You can recommend another here if you want, or head back to our main page for more awesome sales." ;
    return false;
}