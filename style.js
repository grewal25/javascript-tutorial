
const select = document.querySelector('select');
const html = document.querySelector('html')
console.log(html)

function update(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;

}

function changeColor(){
    if (select.value === 'black'){
        update('black', 'white')
    }else {
        update('white', 'black');
    }
}

select.onchange = changeColor;