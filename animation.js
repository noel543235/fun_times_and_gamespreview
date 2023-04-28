let block1 = document.getElementById('1');
let block2 = document.getElementById('2');
let block3 = document.getElementById('3');
let block4 = document.getElementById('4');
let block5 = document.getElementById('5');
let block6 = document.getElementById('6');
let block7 = document.getElementById('7');
let block8 = document.getElementById('8');
let block9 = document.getElementById('9');
let block10 = document.getElementById('10');
let block11 = document.getElementById('11');
let block12 = document.getElementById('12');
//i got help from stack overflow to get the random numbers: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
let chosen1 = Math.floor(Math.random() * (2 - 1 + 1) + 1);
let chosen2 = Math.floor(Math.random() * (4 - 3 + 1) + 3);
let chosen3 = Math.floor(Math.random() * (6 - 5 + 1) + 5)
let chosen4 = Math.floor(Math.random() * (8 - 7 + 1) + 7)
let chosen5 = Math.floor(Math.random() * (10 - 9 + 1) + 9)
let chosen6 = Math.floor(Math.random() * (12 - 11 + 1) + 11)


let page1 = document.getElementById('page2');
let page1nav = document.getElementById('page2nav');
let disney1 = document.getElementById('hog1');
let disney2 = document.getElementById('hog2');
let page1foot = document.getElementById('page2foot');
let anim1 = document.getElementById('ani3');
let anim2 = document.getElementById('ani4');
let anim3 = document.getElementById('anim4');
console.log(chosen4);
block1.addEventListener('click',function(){
    if(chosen1 == 1){
        block1.classList.add('animation1');
    } 
    else{
        block1.style.display = 'none';
    }
});
block2.addEventListener('click',function(){
    if(chosen1 == 2){
        block2.classList.add('animation1');
    }
    else{
        block2.style.display = 'none';
    }
});
block3.addEventListener('click',function(){
     if(chosen2 == 3){
        block3.classList.add('animation2');
    }  
    
    else{
        block3.style.display = 'none';
    }
});
block4.addEventListener('click',function(){
   if(chosen2 == 4){
        block4.classList.add('animation2');
    } 
    else{
        block4.style.display = 'none';
    }
});

block5.addEventListener('click',function(){
  if(chosen3 == 5){
        let bgcolor = '#A5D9FA';
        page1.style.backgroundColor = bgcolor;
        page1nav.style.backgroundColor = '#DBCBA2';
        disney1.style.color = '#2674D0';
        anim3.style.color = '#2674D0';
        disney2.style.color = '#2674D0';
        page1foot.style.backgroundColor = '#DBCBA2';
        anim1.style.color = '#2674D0';
        anim2.style.color = '#2674D0';
    } 
    
    else{
        block5.style.display = 'none';
    }
});
block6.addEventListener('click',function(){
 if(chosen3 == 6){
        let bgcolor = '#A5D9FA';
        page1.style.backgroundColor = bgcolor;
        page1nav.style.backgroundColor = '#DBCBA2';
        disney1.style.color = '#2674D0';
        anim3.style.color = '#2674D0';
        disney2.style.color = '#2674D0';
        page1foot.style.backgroundColor = '#DBCBA2';
        anim1.style.color = '#2674D0';
        anim2.style.color = '#2674D0';
    } 
    else{
        block6.style.display = 'none';
    }
});
block7.addEventListener('click',function(){
    if(chosen4 == 7){
        block7.classList.add('flip');
    }
    else{
        block7.style.display = 'none';
    }
});
block8.addEventListener('click',function(){
 if(chosen4 == 8){
        block8.classList.add('flip');
    }
    else{
        block8.style.display = 'none';
    }
});

block9.addEventListener('click',function(){
    if(chosen5 == 9){
        block9.classList.add('animation5');
    }
    else{
        block9.style.display = 'none';
    }
});
block10.addEventListener('click',function(){
     if(chosen5 == 10){
        block10.classList.add('animation5');
    }
 
    else{
        block10.style.display = 'none';
    }
});
block11.addEventListener('click',function(){
  if(chosen6 == 11){
        block11.classList.add('animation6');
    }
    
    
    
    else{
        block11.style.display = 'none';
    }
});
block12.addEventListener('click',function(){
    if(chosen6 == 12){
        block12.classList.add('animation6');
    }
    else{
        block12.style.display = 'none';
    }
});