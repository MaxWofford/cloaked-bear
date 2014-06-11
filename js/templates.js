function fillIn() {
	/*Always need the first three divs*/
	document.getElementById("header").innerHTML = header;
	document.getElementById("footer").innerHTML = footer;
	document.getElementById("sidePanel").innerHTML = sidePanel;

	for (var i = 1; i < 4; i++) {
		console.log("generating featured" + i);
			var featured = "<a href=\"" + i + ".html\"><div class=\"large-4 small-6 columns\"><img src=\"img/game" + i + ".jpg\"><div class=\"panel\"><h5><span id=\"item" + i + "\">Item Name </span><span class=\"sale\"><span id=\"percentage" + i + "\">25</span>%</span></h5><h6 class=\"subheader strikeout\">Ð<span id=\"previous-price" + i + "\">100</span></h6><h6 class=\"subheader\">Ð<span id=\"price" + i + "\">75</span></h6></div></div></a>";
			document.getElementById("featured").innerHTML = document.getElementById("featured").innerHTML + featured;
		console.log("feature " + i + " has been generated");
		carryOver = i;
	};
	
	document.getElementById("listing").innerHTML = listing;
	for (var i = carryOver; i < 13; i++) {
		console.log("generating listing" + i);
			var listing = "<a href=\"" + i + ".html\"><div class=\"large-4 small-6 columns\"><img src=\"img/game" + i + ".jpg\"><div class=\"panel\"><h5><span id=\"item" + i + "\">Item Name </span><span class=\"sale\"><span id=\"percentage" + i + "\">25</span>%</span></h5><h6 class=\"subheader strikeout\">Ð<span id=\"previous-price" + i + "\">100</span></h6><h6 class=\"subheader\">Ð<span id=\"price" + i + "\">75</span></h6></div></div></a>";
			document.getElementById("listing").innerHTML = document.getElementById("listing").innerHTML + listing;
		console.log("listing " + i + " has been generated");
		carryOver++;
		i = carryOver;
	};

	/*document.getElementById("product").innerHTML = product;*/
	
}
var footer = "<div class=\"large-12 columns\"><div class=\"horizontal-line\"></div><div class=\"row footer\" style=\"font-size: .25em;\"> <div class=\"large-6 columns\"><p>© <a href=\"\">ShibeSales</a> 2014</p></div> <!--<div class=\"large-6 columns\"><ul class=\"inline-list right\"><li><a href=\"#\">Link 1</a></li><li><a href=\"#\">Link 2</a></li><li><a href=\"#\">Link 3</a></li><li><a href=\"#\">Link 4</a></li></ul></div>--> </div></div>"
var header = "<div id=\"header\" class=\"row\"><div class=\"large-12 columns\"><nav class=\"top-bar\" data-topbar><ul class=\"title-area\"><li class=\"name\"><h1><a href=\"index.html\">Shibe Sales</a></h1></li><li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span>menu</span></a></li></ul> <section class=\"top-bar-section\"> <ul class=\"right\"><li class=\"divider\"></li><li><a href=\"faq.html\">FAQ</a></li><li class=\"divider\"></li><li><a href=\"contact.html\">Contact</a></li><li class=\"divider\"></li><li><a href=\"recommend.html\">Recommend a game</a></li><li class=\"divider\"></li></ul></section></nav> </div></div>"
var listing = "<div class=\"large-3 small-6 columns\"><img src=\"img/game\"><div class=\"panel\"><h5>Item Name <span class=\"sale\"><span class=\"percentage\">25</span>%</span></h5><h6 class=\"subheader strikeout\">Ð<span class=\"price\">100</span></h6><h6 class=\"subheader\">Ð<span class=\"price\">75</span></h6></div></div>"
var sidePanel = "<div class=\"large-2 small-12 columns\"> <img src=\"img/ShibeSales.png\"> <div class=\"hide-for-small panel\"><h3>Miss a steam sale?</h3><h5 class=\"subheader\">Buy the game on sale with <a href=\"http://dogecoin.com/\">Ðogecoin</a>!</h5></div> <div class=\"panel radius\"><h6>Powered by: <a href=\"https://www.dogeapi.com/\">ƉogeAPI</a></h6></div> </div>"
var product = "<div class=\"panel\"><div class=\"row\"> <div class=\"large-2 small-6 columns\"><img id=\"game-img\" src=\"http://placekitten.com/292/136\"><h6 class=\"subheader strikeout\">Ð<span id=\"previous-game-price\">100</span></h6><h6 class=\"subheader\">Ð<span id=\"game-price\">75</span><span class=\"game-sale\"><span id=\"game-percentage\">25/span>% off</span></h6><button id=\"buy-button\" class=\"success\">Buy</button></div> <div class=\"large-10 small-6 columns\"><strong><h2 id=\"game-name\">A game about cats</h2><hr/></strong><h4>Game description</h4><p id=\"game-description\">Lorem ipsum dolor sit amet, ex denique facilisis omittantur mea, in enim omittanturadversarium quo, sea in vero oblique. Mea altera facilisis signiferumque ei, eu cibo omnes vim. Qui errortimeam no, quidam expetenda et usu. Qui dolore nostrum ei.</p></div> </div></div>"
var featured = "<a href=\"1.html\"><div class=\"large-4 small-6 columns\"><img src=\"http://placekitten.com/800/800\"><div class=\"panel\"><h5><span id=\"item1\">Item Name </span><span class=\"sale\"><span class=\"percentage\">25</span>%</span></h5><h6 class=\"subheader strikeout\">Ð<span class=\"price\">100</span></h6><h6 class=\"subheader\">Ð<span class=\"price\">75</span></h6></div></div></a>"

window.onload = fillIn();

