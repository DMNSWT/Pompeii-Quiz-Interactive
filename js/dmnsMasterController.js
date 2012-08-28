/*
 * Controls all of the DIVS and listens for when a user finishes one node and navigates to the next
 * needs Jquery1.7.2.min.js 
 */

$('document').ready(function() {
	setUpNavigationBetweenNodes('.navigateTo');
   	MouseOverCheckboxOn();
   	hideAllSlideDivs('.node');
   	fadeInDiv('start');
 });
 
function MouseOverCheckboxOn(){
	$('.option').mouseover(function(){
		//$(this).addClass('boxChecked');
	});
}

function setUpNavigationBetweenNodes(className){
	// switch graphic to CHECKED box.
	$(className).click(function(){
		$(this).addClass('boxChecked');
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
		var classList = $(this).attr("class");
		if ($(this).attr("class").indexOf(tagToRemove) >= 0)
		{
			$(this).hide();
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
}
