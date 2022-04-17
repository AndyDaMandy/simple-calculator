let container = document.querySelector('#container');
let display = [];

function showdisplay(){
    container.innerHTML = '';
   let displayer = display.join(' ');
   let pusher = document.createElement('p');
   pusher.textContent = displayer;
   container.appendChild(pusher);
}

function addItem(char){
    display.push(char)
}
