const amzLocal = 'to-do-as';

document.getElementById('btn').onclick = function(){
    let input = document.getElementById('txt');
    
    if(!input.value){
        alert('O campo deve ser preenchido!');
    }
    else if(validadeIfExistsNewTask()){
        alert('Ja existe uma tarefa com essa descricao!');
    }
    else{
        let values = JSON.parse(localStorage.getItem(amzLocal) || "[]");
        values.push({
            name: input.value
        });
        localStorage.setItem(amzLocal, JSON.stringify(values));
        show();
    }
    input.value = "";
}
function show(){
    let values = JSON.parse(localStorage.getItem(amzLocal) || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = "";
    for(let i = 0; i<values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg></button></li>`;
    }
}
function removeItem(dado){
    let values =JSON.parse(localStorage.getItem(amzLocal) || "[]");
    let index = values.findIndex(x => x.name == dado);
    values.splice(index, 1);
    localStorage.setItem(amzLocal, JSON.stringify(values));
    show();
}
function validadeIfExistsNewTask(){
    let values = JSON.parse(localStorage.getItem(amzLocal) || "[]");
    let inputValue = document.getElementById('txt').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists?false:true;
}
show();