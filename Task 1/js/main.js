let roundes = document.getElementsByClassName("round-section")
let mainSection = document.querySelector("#main-section")
let round = roundes[0]
var speed = 3;

randomDotGenerator(30,(mainSection.offsetHeight-5),(mainSection.offsetWidth-5));

window.addEventListener('keydown', function (e) {
    //Right Side Navigation
    if (e.keyCode == 39) {
        if((round.offsetLeft+speed)<mainSection.offsetWidth-round.offsetWidth){
            round.style.left = round.offsetLeft+speed+'px';
        }
        else{
            round.style.left = (mainSection.offsetWidth-round.offsetWidth)+'px'
        }
    }
    //Left Side Navigation
    else if (e.keyCode == 37) {
        if((round.offsetLeft-speed)>0){
            round.style.left = round.offsetLeft-speed+'px';
        }
        else{
            round.style.left =0+'px'
        }
    }
    //Buttom Side Navigation
    else if (e.keyCode == 40) {
        if((round.offsetTop+speed)<(mainSection.offsetHeight-round.offsetHeight)){
            round.style.top = round.offsetTop+speed+'px';
        }
        else{
            round.style.top = mainSection.offsetHeight-round.offsetHeight+'px';
        }
    }
    //Top Side Navigation
    else if (e.keyCode == 38) {
        if((round.offsetTop-speed)>0){
            round.style.top = round.offsetTop-speed+'px';
        }
        else{
            round.style.top=0+'px'
        }
    }

    let fromLeft = round.offsetLeft;
    let toLeft = round.offsetLeft+round.offsetWidth;
    let fromTop = round.offsetTop;
    let toTop = round.offsetTop+round.offsetHeight;
    let dot = findUnderDot(fromTop,toTop,fromLeft,toLeft);
    
    if(dot){
        mainSection.removeChild(dot);
    
        round.style.width = round.offsetWidth+2+'px';
        round.style.height = round.offsetHeight+2+'px';
    }

}
)

// Little Dot Location

function findUnderDot(fromTop,toTop,fromLeft,toLeft)
{
let dots = document.querySelectorAll('.dot');

for(let i=0;i<dots.length;i++)
{
    if((dots[i].offsetTop>fromTop && (dots[i].offsetTop+dots[i].offsetHeight)<toTop) 
    && (dots[i].offsetLeft>fromLeft && (dots[i].offsetLeft+dots[i].offsetWidth)<toLeft))
    {
        return dots[i];
    }
}
}

// Random Element Create

function randomDotGenerator(count,maxTop,maxLeft){
let parent = document.getElementById('main-section');
for(let i=0;i<count;i++){
    let dot = document.createElement('div');
    dot.classList.add('dot');

    let leftPos;

    do{
        leftPos = Math.ceil(Math.random()*1000);
    }
    while(leftPos>maxLeft)

    let topPos;

    do{
        topPos = Math.ceil(Math.random()*1000);
    }
    while(topPos>maxTop)

    dot.style.top = topPos+'px';
    dot.style.left = leftPos+'px';

    parent.appendChild(dot);
}
}

// Change Location with Mouse Click 

mainSection.addEventListener('click',function(e){

    let locationX= e.offsetX
    let locationY=e.offsetY
    round.style.left = (locationX-50) + 'px';
    round.style.top = (locationY-50) + 'px';
    
    })


