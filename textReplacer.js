
// TODO: Allow user to dynamically add comments
//
var comments = 
{
	"#C1" : "Wow, so cool",
	"#C2" : "Dude, so bad"
};

var currentKeyStrokes = "";

// TODO: Change as comments / keys are added (This is only necessary if we want more than 10 comments)
//
var maxKeyLength = 3;


function readKeys(e)
{
	if(e.key  !== '#' && currentKeyStrokes === "")
	{
		return;
	}
	else if(currentKeyStrokes.length > maxKeyLength)
	{
		currentKeyStrokes = "";
		return;
	}
	
	currentKeyStrokes += e.key;
}

function replaceText(e)
{
	if(!comments.hasOwnProperty(currentKeyStrokes) || e.target.tagName !== "INPUT")
	{
		return;
	}
	
	var oldString = e.target.value;
	var newString = oldString.substring(0, oldString.length - currentKeyStrokes.length);
	e.target.value = newString + comments[currentKeyStrokes];
	
	currentKeyStrokes = "";
}

document.addEventListener('DOMContentLoaded', function() 
{
	var inputs = document.getElementsByTagName('input');
	
	for(var i = 0; i < inputs.length; i++)
	{
		inputs[i].addEventListener("keypress", readKeys);
		inputs[i].addEventListener("keyup", replaceText);
	}

});