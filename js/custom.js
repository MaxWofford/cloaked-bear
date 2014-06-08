/*-----------------------------------
This section deals with json handling
-----------------------------------*/
var myJson = '{"games":{"id":{"one":{"title":"Lead and Gold: Gangs of the Wild West","description":"Lead and Gold: Gangs of the Wild West is a third-person shooter that delivers an intense team-based multiplayer experience. Relive the violent era of the Wild West with adrenaline-fueled action and fast-paced gunfights. Engage in gritty battles in beautifully rendered classic Western settings.","link":"http://store.steampowered.com/app/42120/","price":"10","sale":"80"},"two":{"title":"E.Y.E: Divine Cybermancy","description":"In a dark Cyberpunk world, you (and up to 3 friends) wage war against the all-powerful Federation in this Source-powered FPS/RPG.","link":"http://store.steampowered.com/app/91700/","price":"10","sale":"50"},"three":{"title":"Nuclear Dawn","description":"Explore war-torn post-apocalyptic landscapes and take fight against enemies using various weapons in this FPS/RTS hybrid.","link":"http://store.steampowered.com/app/17710/","price":"10","sale":"75"},"four":{"title":"Beatbuddy: Tale of the Guardians","description":"Awakened from his slumber, Beatbuddy journeys through lush hand-painted environments on a quest to save his companions and his own immortality. Beatbuddy interacts with the living breathing environment that pulses to the beat of an original soundtrack, aiding him as he unlocks new paths and solves puzzles.","link":"http://store.steampowered.com/app/231040/","price":"10","sale":"75"},"five":{"title":"Roogoo","description":"Roogoo is an innovative and unusual 3D puzzle game that has players guide and stack different shaped blocks through various platforms to not only save planet Roo, but the entire Roogoo race. Roogoo tasks players with guiding meteors in the form of shaped blocks through a series of rotating disks as a means of saving planet Roo and the entire Roogoo race. If aligned correctly, the disks allow the blocks to reach the ground and scores are awarded. Various obstacles and enemies will impede the blocks movement and with the flow of meteor blocks steadily increasing as the game progresses, players will have to think on their feet to save the Roogoo and rack up seriously high scores.","link":"http://store.steampowered.com/app/207150/","price":"3","sale":"66"},"six":{"title":"Cortex Command","description":"Choose between different factions, with their own set of expendable soldiers, mechas, and weapons. Protect your brain, mine gold, and destroy the enemy cortex in his bunker complex!","link":"http://store.steampowered.com/app/209670/","price":"20","sale":""},"seven":{"title":"Arena Wars 2","description":"Arena Wars 2 is the sequel of the award-winning Arena Wars series and combines revolutionary RTS fights with RPG elements.","link":"http://store.steampowered.com/app/207730/","price":"20","sale":"90"}}}}';
var objectData = JSON.parse(myJson);


/*-----------------------------------
Customizing page
-----------------------------------*/
var pathArray = window.location.pathname.split( '/' );
var urlArray = pathArray[2].split( '.' );
var pageNumber = urlArray[0];



var title = objectData.games.id.one.title;



function setup(objectData) {
	document.getElementById('title').innerHTML = "ShibeSales | " + title;
}

window.onload = setup();
