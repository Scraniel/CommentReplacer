document.addEventListener('DOMContentLoaded', function() 
{
	var checkPageButton = document.getElementById('changePage');
	checkPageButton.addEventListener( "click", function() 
	{
		checkPageButton.textContent = "YOU CLICKED!";
	});
});