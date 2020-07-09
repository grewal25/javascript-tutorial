const select = document.querySelector('select');
const para = document.querySelector('h1')

select.addEventListener('change', setWeather);

function setWeather(){
    const choice = select.value;

    if (choice === 'sunny'){
        para.textContent = 'nice sunny day';
    } else if (choice === 'rainy'){
        para.textContent =' rainy day';
    }else if (choice === 'snowing'){
        para.textContent ='it will snow';
    }else if (choice === 'overcast'){
        para.textContent ='cloud';
    } else {
        para.textContent = 'i dont know what you ask' ;
    }
}