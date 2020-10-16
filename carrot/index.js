const start = document.querySelector('.start');
const field = document.querySelector('.field');
const number = document.querySelector('.number');

const randomNumber = function(min,max){
    const ranNum = Math.floor(Math.random()*(max-min+1))+ min;
    return ranNum;
}


start.addEventListener('click',()=>{
    
    const randomCreateNumberCarrot = randomNumber(1,15);
    const randomCreateNumberCBug = randomNumber(1,30);

    

    let i = 0;
   
   do{
    carrotAdd();
    i++; 
   } while(i<randomCreateNumberCarrot);
   
   for(b=0; b<randomCreateNumberCBug; b++){
    bugAdd();
    b++;
   }
   
   number.innerText = randomCreateNumberCarrot;
  
   timer();
});

//

 function carrotAdd(){
    
    const carrot = document.createElement('div');
    carrot.setAttribute('class','carrot');
    carrot.innerHTML = `<img src="img/carrot.png"  data-id="carrot">`;
    carrot.style.transform = `translate(${randomNumber(1,1800)}px, ${randomNumber(200,500)}px)`;
    field.appendChild(carrot);

    //
    
    }

//

function bugAdd(){
    const bug = document.createElement('div');
    bug.setAttribute('class','bug');
    bug.innerHTML = `<img src="img/bug.png"  data-id="bug">`;
    bug.style.transform = `translate(${randomNumber(1,1800)}px, ${randomNumber(200,500)}px)`;
    field.appendChild(bug);
}

//

const end = document.querySelector('.end');
const reStart = document.querySelector('.restart');

field.addEventListener('click',(e) => {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    
    if (e.target.dataset.id == 'bug'){
        end.classList.add('on');
    }

    const carrotDiv = document.querySelectorAll('.carrot');

    carrotDiv.forEach(function(element){
        console.log(element.length);
    })
});

// 

reStart.addEventListener('click',() => {
    window.location.reload();
})

// timer

const times = document.querySelector('.timer');

function timer(){
    let time = 20;
    let min = "";
    let sec = "";
    
    let t = setInterval(function(){
        min = parseInt(time/60);
        sec = time%60;
    
        times.innerHTML = `${min}:${sec}`;
        time--;
        
        if(end.classList.contains('on')){
            clearInterval(t);
          times.innerHTML = `00:00`;          
      };

        if(time<0){
            clearInterval(t);
            times.innerHTML = `00:00`;
            end.classList.add('on');
        }
         
    },1000);
}
