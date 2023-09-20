let h = document.querySelector("#hours");
let m = document.querySelector("#minutes");
let s = document.querySelector("#seconds");

setInterval(()=>{
    let data = new Date();

    h.innerHTML = data.getHours() < 10?"0"+data.getHours():data.getHours();
    m.innerHTML = data.getMinutes() < 10?"0"+data.getMinutes():data.getMinutes();
    s.innerHTML = data.getSeconds() < 10?"0"+data.getSeconds():data.getSeconds();


}, 1000);