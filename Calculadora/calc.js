function inserir(numero){
    let num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num + numero;
}
function limpar(){
    document.getElementById('result').innerHTML = "";
}
function cleanBack(numero){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}
function calcular(){
    let result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = "";
    }
}