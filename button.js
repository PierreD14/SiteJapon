//console.log(1+5);
//console.log('Jean'+'Baptiste');
var button = document.getElementById('button');
console.log(button);
button.addEventListener('click', () => {
	//console.log("It works");
	//alert("mouhahahahaha");
	button.style.display='none';
	setTimeout(function(){ button.style.display='block'; }, 
		3000);
});


