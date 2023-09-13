let [segundos, minutos, horas] = [0, 0, 0];
let temp = document.querySelector("#temp");
let timer = null;

const temporizador = () =>{
    segundos++;

    if(segundos == 60){
        segundos = 0; //volta pra 0
        minutos++ //incrementa + 1
    }
    if(minutos == 60){
        minutos = 0;
        horas++; //o mesmo processo anterior
    }

    let h = horas < 10? "0"+horas:horas;
    let m = minutos < 10? "0"+minutos:minutos;
    let s = segundos < 10? "0"+segundos:segundos;
    temp.innerHTML = h+":"+m+":"+s; //mostrar o temporizador na tag h1

}

const start = () =>{
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(temporizador, 1000);//Contar de 1 a 1 hehe!
}
//User arrow function mas podes usar function tambem hehe!
const stop = () =>{
    clearInterval(timer);
}

const reset = () =>{
    clearInterval(timer);
    [segundos, minutos, horas] = [0, 0, 0];
    temp.innerHTML = "00:00:00";
}