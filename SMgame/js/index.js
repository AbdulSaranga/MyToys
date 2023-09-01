const pipe = document.getElementById('pipe');
const mario = document.getElementById('mario');
const clouds = document.getElementById('clouds');

function jump(event){
    if(event.key == 'ArrowUp'){
        mario.classList.add('jump');
        setTimeout(function(){
            mario.classList.remove('jump');
        }, 500);
    }
}

const loop = setInterval(function(){
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    if(pipePosition <= 70 && pipePosition > 0 && marioPosition <= 70){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '50px';
        mario.style.marginLeft = '20px';
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.style.marginBottom = 0;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
    }
}, 10);

window.addEventListener('keydown', jump);
