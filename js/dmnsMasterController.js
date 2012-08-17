/*
 * Controls all of the DIVS and listens for when a user finishes one node and navigates to the next
 * needs Jquery1.7.2.min.js 
 */

$('document').ready(function() {
	setUpNavigationBetweenNodes('.navigateTo');
   	hideAllSlideDivs('.node');
   	fadeInDiv('start');
 });

function setUpNavigationBetweenNodes(className){
	$(className).click(function(){
		var goToTarget = this.id.split('-')[1]; // Target parsed from '-' in string id - E.G. "goto-2a" -- 2a is the id of new target
		goToNode(goToTarget);
	});
}

function goToNode(target){
	// slowfade all DIVS
	fadeOutDiv('.reveal');
	
	//remove "reveal" class from all divs
	removeTagsFromAllDivs("reveal");
	
	var targetNode = target;
	
	// add "reveal" class to ONLY the active div
	addTagToActiveDiv(targetNode, 'reveal');
	
	// Set "FUTURE" slide to default -- the middle one so we can later choose left, right, or down
	// And... I have no idea how to do this one yet.  Tell Reveal.js to do something cool.
	
	// navigate to new target
	fadeInDiv(targetNode);
	
	
}

function hideAllSlideDivs(className){
	$(className).hide();
}

// TO DO this glitches... :(  Not hiding properly, but it still works.
function fadeOutDiv(className){
	$(className).fadeOut();
}

function fadeInDiv(className){
	$("div").each(function(i){
		if ($(this).attr("class").indexOf(className) >= 0)
		{
			$(this).fadeIn();
		}
	});
}

function removeTagsFromAllDivs(tagToRemove) {
	// Remove "tagToRemove" from all Divs 
	$("div").each(function(i){
		//console.log("Class is: " + $(this).attr("class"));
		var classList = $(this).attr("class");
		if ($(this).attr("class").indexOf(tagToRemove) >= 0)
		{
			//console.log("This div has: " + tagToRemove);
			$(this).removeClass(tagToRemove);
		}
	});
}

function addTagToActiveDiv(activeSection, tagToAdd){
	$("div").each(function(i){
		if ($(this).attr("class").indexOf(activeSection) >= 0)
		{
			//console.log("Found the one we want");
			$(this).addClass(tagToAdd);
			//console.log("And added new TAG");
		}
	});
	
	//$("div").each(function(i){
//		if ($(this).attr("class").indexOf(tagToAdd) >= 0)
		//{
//			console.log("And this proves it: " + $(this).attr("class"));
		//}
	//});
}
