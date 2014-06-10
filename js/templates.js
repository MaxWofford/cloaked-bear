function fillIn() {
	for (var i = 1; i < 4; i++) {
		console.log("generating featured" + i);
			var featured = "<a href=\"" + i + ".html\"><div class=\"large-4 small-6 columns\"><img src=\"http://placekitten.com/800/800\"><div class=\"panel\"><h5><span id=\"item" + i + "\">Item Name </span><span class=\"sale" + i + "\"><span class=\"percentage" + i + "\">25</span>%</span></h5><h6 class=\"subheader strikeout\">Ð<span class=\"price\">100</span></h6><h6 class=\"subheader\">Ð<span class=\"price" + i + "\">75</span></h6></div></div></a>";
			document.getElementById("featured").innerHTML = document.getElementById("featured").innerHTML + featured;
		console.log(i + "has been generated");
	};
	/*document.getElementById("featured").innerHTML = featured;*/
	document.getElementById("footer").innerHTML = footer;
	document.getElementById("header").innerHTML = header;
	document.getElementById("listing").innerHTML = listing;
	document.getElementById("sidePanel").innerHTML = sidePanel;
}
var footer = "<div class=\"large-12 columns\"><div class=\"horizontal-line\"></div><div class=\"row footer\" style=\"font-size: .25em;\"> <div class=\"large-6 columns\"><p>© <a href=\"\">ShibeSales</a> 2014</p></div> <!--<div class=\"large-6 columns\"><ul class=\"inline-list right\"><li><a href=\"#\">Link 1</a></li><li><a href=\"#\">Link 2</a></li><li><a href=\"#\">Link 3</a></li><li><a href=\"#\">Link 4</a></li></ul></div>--> </div></div>"
var header = "<div id=\"header\" class=\"row\"><div class=\"large-12 columns\"><nav class=\"top-bar\" data-topbar><ul class=\"title-area\"><li class=\"name\"><h1><a href=\"index.html\">Shibe Sales</a></h1></li><li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span>menu</span></a></li></ul> <section class=\"top-bar-section\"> <ul class=\"right\"><li class=\"divider\"></li><li><a href=\"faq.html\">FAQ</a></li><li class=\"divider\"></li><li><a href=\"contact.html\">Contact</a></li><li class=\"divider\"></li><li><a href=\"recommend.html\">Recommend a game</a></li><li class=\"divider\"></li></ul></section></nav> </div></div>"
var listing = "<div class=\"large-3 small-6 columns\"><img src=\"http://placekitten.com/292/136\"><div class=\"panel\"><h5>Item Name <span class=\"sale\"><span class=\"percentage\">25</span>%</span></h5><h6 class=\"subheader strikeout\">Ð<span class=\"price\">100</span></h6><h6 class=\"subheader\">Ð<span class=\"price\">75</span></h6></div></div>"
var sidePanel = "<div class=\"large-2 small-12 columns\"> <img src=\"img/ShibeSales.png\"> <div class=\"hide-for-small panel\"><h3>Miss a steam sale?</h3><h5 class=\"subheader\">Buy the game on sale with <a href=\"http://dogecoin.com/\">Ðogecoin</a>!</h5></div> <div class=\"panel radius\"><h6>Powered by: <a href=\"https://www.dogeapi.com/\">ƉogeAPI</a></h6></div> </div>"



window.onload = fillIn();