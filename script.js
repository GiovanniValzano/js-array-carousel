const Slider = document.getElementById("slider");

const arrImg = [ "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

for (i = 0; i < arrImg.length; i++) {
    const singleImg = document.createElement("img");
    singleImg.src = arrImg[i];
    singleImg.classList.add('slider-img')

    if(i === 0){
        singleImg.classList.add('active');
    }

    Slider.append(singleImg);
}

let currentImg = 0;
const listImg = document.querySelectorAll('.slider-img');


const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

downButton.addEventListener('click',
    function(){
        listImg[currentImg].classList.remove('active');
        if(currentImg === 4){
            currentImg = -1;
        }
        currentImg++;
        listImg[currentImg].classList.add('active');
    }
);

upButton.addEventListener('click',
    function(){
        listImg[currentImg].classList.remove('active');
        if(currentImg === 0){
            currentImg = 5;
        }
        currentImg--;
        listImg[currentImg].classList.add('active');
    }
)