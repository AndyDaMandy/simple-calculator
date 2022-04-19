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
    let string = char.toString();
    if (char !== '=' || char !== '/' || char !== '*' || char !== '+' || char !== '-'){
        if (display.length > 0){
            display[display.length -1] = display[display.length -1] += string;
     // display.splice(-1, 1, string);
        } else {
            display.push(string);
        }
      
    } else {
        display.push(char);
    }
    showdisplay();
}
document.querySelector('#one').onclick = function(){addItem(1);}
document.querySelector('#two').onclick = function(){addItem(2);}
document.querySelector('#three').onclick = function(){addItem(3);}
document.querySelector('#four').onclick = function(){addItem(4);}
document.querySelector('#five').onclick = function(){addItem(5);}
document.querySelector('#six').onclick = function(){addItem(6);}
document.querySelector('#seven').onclick = function(){addItem(7);}
document.querySelector('#eight').onclick = function(){addItem(8);}
document.querySelector('#nine').onclick = function(){addItem(9);}
document.querySelector('#zero').onclick = function(){addItem(0);}
document.querySelector('#equal').onclick = function(){addItem('=');}
document.querySelector('#plus').onclick = function(){addItem('+');}
document.querySelector('#multiply').onclick = function(){addItem('*');}
document.querySelector('#minus').onclick = function(){addItem('-');}
document.querySelector('#divide').onclick = function(){addItem('/');}