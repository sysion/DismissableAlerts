
const divElem='<div class=\'alert\'><i class=\'fa fa-times\'></i><p>This is an alert?</p></div>';
const alert_container=document.querySelector('.alert-container');
const btn=document.querySelector('button[type="submit"]');
//const close=document.querySelector('.fa-times');

btn.addEventListener('click', (e)=>{
	//var divElem='<div class=\'alert\'><i class=\'fa fa-times\'></i><p>This is an alert?</p></div>';

	//alert_container.appendChild(div);		// error: argument is not an object
	alert_container.innerHTML += divElem;

	//var close=document.querySelector('.fa-times');
	divElems = alert_container.getElementsByClassName('alert');
	//console.log(divElems); 				// returns HTMLCollection
	console.log(divElems.length);

	if (divElems){

		// error: forEach is not a function - this is because divElems is not an Array,
		// Map or Set.
		//divElems.forEach((elem)=>{	
		Array.from(divElems).forEach((elem)=>{	// first convert divElems to array	
			var close = elem.querySelector('.fa-times');
			close.addEventListener('click', ()=> { dismissAlert(elem) });
		});
	}
});

/*close.addEventListener('click', ()=>{
	console.log('close');
	document.querySelector('.alert').style.width = 0;
	document.querySelector('.alert').style.height = 0;
	setTimeout(()=>{
		document.querySelector('.alert').style.display='none';
	}, 5000);
});*/


let dismissAlert = (elem)=>{
	//document.querySelector('.alert').style.width = 0;
	//document.querySelector('.alert').style.height = 0;
	elem.style.opacity = 0;
	setTimeout(()=>{
		//document.querySelector('.alert').style.display='none';
		elem.style.display='none';
	}, 300);
	//console.log('dismiss');
}