
const divElem='<div class=\'alert\'><i class=\'fa fa-times\'></i><p>This is an alert?</p></div>';
const alert_container=document.querySelector('.alert-container');
const btn=document.querySelector('button[type="submit"]');

btn.addEventListener('click', (e)=>{
	alert_container.innerHTML += divElem;

	divElems = alert_container.getElementsByClassName('alert');

	if (divElems){	
		Array.from(divElems).forEach((elem)=>{	// first convert divElems to array	
			var close = elem.querySelector('.fa-times');
			close.addEventListener('click', ()=> { dismissAlert(elem) });
		});
	}
});

let dismissAlert = (elem)=>{
	elem.style.opacity = 0;
	setTimeout(()=>{
		elem.style.display='none';
	}, 300);
}