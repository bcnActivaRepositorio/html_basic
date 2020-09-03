let openOne = document.getElementById('abro');
let closeOne = document.getElementById('cierro');

//what you point at

openOne.addEventListener('click', openSesame)
closeOne.addEventListener('click', closeSesame)

function openSesame(){

console.log('open works');

let showMe = document.getElementById('dialogo');

showMe.open = true;

}

function closeSesame(){

    console.log('close works');

    let hideMe = document.getElementById('dialogo');

    hideMe.open = false;
}
//today's year
let takeYou = document.getElementById('dateOfToday');

//show me the year
const showYear = () => new Date().getFullYear();

//write it into html
takeYou.textContent = showYear();