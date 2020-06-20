const square = document.querySelectorAll('.square')
const panda = document.querySelectorAll('.panda')

/* reference using id in html file*/
const timeremain=document.querySelector('#time-left')
let credit=document.querySelector('#credit')

let result=0;
let currentTime= timeremain.textContent;

let randomposition,hitposition;

function buildSquare()
{
	square.forEach(className=>{
		className.classList.remove('panda');
	})

    let randomposition= square[Math.floor(Math.random()*9)]
	randomposition.classList.add('panda');

	//assign the id of the randomPosition to hitPosition for us to use later
	hitposition= randomposition.id;

}

square.forEach(id=>{
	id.addEventListener('mouseup',()=>{
		if(id.id==hitposition)
		{
			result=result+1
			credit.textContent=result
			hitposition=null
		}
	})
})

function pandaleap()
{
	let timerId=null;
	timerId= setInterval(buildSquare, 800);
}
pandaleap();

function downcount()
{
	currentTime--;
	timeremain.textContent=currentTime;

	if(currentTime==0)
	{
		clearInterval(timerId);
		alert("Well Done ! Your Panda's credit "+ result); 
	}
}

let timerId=setInterval(downcount,900);