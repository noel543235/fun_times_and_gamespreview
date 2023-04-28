let name1 = 'Buffy';
let name2 = 'Frosty';
let name3 = 'Rockey';
let name4 = 'Lucy';
let name5 = 'Casper';
let name6 = 'Carrot';
let name7 = 'Batman';
let name8 = 'Dexter';
let num;
let nameright;
let btn = document.getElementById('btn');
let names = document.getElementById('names');
let buffy = document.getElementById('buffy');
let frosty = document.getElementById('frosty');
let rocky = document.getElementById('rocky');
let lucy = document.getElementById('lucy');
let casper = document.getElementById('casper');
let carrot = document.getElementById('carrot');
let batman = document.getElementById('batman');
let dexter = document.getElementById('dexter');
btn.addEventListener('click',function(){
    num = chosen = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    if(num == 1){
      names.replaceChildren(name1);
      nameright = name1;
      
    
    } else  if(num == 2){
        names.replaceChildren(name2);
        nameright = name2;
      
      } else  if(num == 3){
        names.replaceChildren(name3);
        nameright = name3;
      
      } else  if(num == 4){
        names.replaceChildren(name4);
        nameright = name4;
      
      } else  if(num == 5){
        names.replaceChildren(name5);
        nameright = name5;
      
      } else  if(num == 6){

        names.replaceChildren(name6);
        nameright = name6;
      } else  if(num == 7){
   
        names.replaceChildren(name7);
        nameright = name7;
      
      } else  if(num == 8){
  
        names.replaceChildren(name8);
        nameright = name8;
      
      }
      buffy.style.display = 'block';
      buffy.classList.remove('flip');
      frosty.style.display = 'block';
      frosty.classList.remove('flip');
      rocky.style.display = 'block';
      rocky.classList.remove('flip');
      lucy.style.display = 'block';
      lucy.classList.remove('flip');
      casper.style.display = 'block';
      casper.classList.remove('flip');
      carrot.style.display = 'block';
      carrot.classList.remove('flip');
      batman.style.display = 'block';
      batman.classList.remove('flip');
      dexter.style.display = 'block';
      dexter.classList.remove('flip');
     
});

buffy.addEventListener('click',function(){
    if(name1 == nameright){
        names.replaceChildren('Correct! Good Job!');
        frosty.classList.add('flip');
        rocky.classList.add('flip');
        lucy.classList.add('flip');
        casper.classList.add('flip');
        carrot.classList.add('flip');
        batman.classList.add('flip');
        dexter.classList.add('flip');
    } else{
        buffy.style.display= 'none';
    }
});

frosty.addEventListener('click',function(){
    if(name2 == nameright){
        names.replaceChildren('Correct! Good Job!');
        buffy.classList.add('flip');
        rocky.classList.add('flip');
        lucy.classList.add('flip');
        casper.classList.add('flip');
        carrot.classList.add('flip');
        batman.classList.add('flip');
        dexter.classList.add('flip');
    } else{
        frosty.style.display= 'none';
    }
});

rocky.addEventListener('click',function(){
    if(name3 == nameright){
        names.replaceChildren('Correct! Good Job!');
        buffy.classList.add('flip');
        frosty.classList.add('flip');
        lucy.classList.add('flip');
        casper.classList.add('flip');
        carrot.classList.add('flip');
        batman.classList.add('flip');
        dexter.classList.add('flip');
    } else{
        rocky.style.display= 'none';
    }
});

lucy.addEventListener('click',function(){
    if(name4 == nameright){
        names.replaceChildren('Correct! Good Job!');
        buffy.classList.add('flip');
        frosty.classList.add('flip');
        rocky.classList.add('flip');
        lucy.style.display = 'block';
        casper.classList.add('flip');
        carrot.classList.add('flip');
        batman.classList.add('flip');
        dexter.classList.add('flip');
    } else{
        lucy.style.display= 'none';
    }
});

casper.addEventListener('click',function(){
    if(name5 == nameright){
        names.replaceChildren('Correct! Good Job!');
        buffy.classList.add('flip');
        frosty.classList.add('flip');
        rocky.classList.add('flip');
        lucy.classList.add('flip');
        carrot.classList.add('flip');
        batman.classList.add('flip');
        dexter.classList.add('flip');
    } else{
        casper.style.display= 'none';
    }
});
carrot.addEventListener('click',function(){
    if(name6 == nameright){
        names.replaceChildren('Correct! Good Job!');
        buffy.classList.add('flip');
        frosty.classList.add('flip');
        rocky.classList.add('flip');
        lucy.classList.add('flip');
        casper.classList.add('flip');
        batman.classList.add('flip');
        dexter.classList.add('flip');
    } else{
        carrot.style.display= 'none';
    }
});

batman.addEventListener('click',function(){
    if(name7 == nameright){
        names.replaceChildren('Correct! Good Job!');
        buffy.classList.add('flip');
        frosty.classList.add('flip');
        rocky.classList.add('flip');
        lucy.classList.add('flip');
        casper.classList.add('flip');
        carrot.classList.add('flip');
        dexter.classList.add('flip');
    } else{
        batman.style.display= 'none';
    }
});
dexter.addEventListener('click',function(){
    if(name8 == nameright){
        names.replaceChildren('Correct! Good Job!');
        buffy.classList.add('flip');
        frosty.classList.add('flip');
        rocky.classList.add('flip');
        lucy.classList.add('flip');
        casper.classList.add('flip');
        carrot.classList.add('flip');
        batman.classList.add('flip');
        
        

    } else{
        dexter.style.display= 'none';
    }
});