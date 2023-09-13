const textBox = document.querySelector('.text-box');
const btn = document.querySelector('#btn');
let notas = document.querySelectorAll('.input-box');

function showNotes(){
    textBox.innerHTML = localStorage.getItem('notas');
}

showNotes();

function updateStorage(){
    localStorage.setItem('notas', textBox.innerHTML);
}

btn.addEventListener('click', () =>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/natieditions00 (71).png';
    textBox.appendChild(inputBox).appendChild(img);
});

textBox.addEventListener('click', (e) =>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notas = document.querySelectorAll('.input-box');
        notas.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
});

document.addEventListener('keydown', event =>{
    if(event.key === "ENTER"){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});
