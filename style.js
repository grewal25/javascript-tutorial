

const btn = document.querySelector('button');
const txt = document.querySelector('p');


function updateButton (){
    if (btn.textContent === 'start machine'){
        btn.textContent = 'stop machine';
        txt.textContent = 'machine has started';
    } else {
        btn.textContent = 'start machine';
        txt.textContent = 'machine has stopped';

    }
}

btn.addEventListener('click', updateButton)