let reset1 = document.getElementById("reset1");
let reset2 = document.getElementById("reset2");
let page1 = document.getElementById('page1');
let page1nav = document.getElementById('page1nav');
let disney1 = document.getElementById('disney1');
let disney2 = document.getElementById('disney2');
let page1foot = document.getElementById('page1foot');
let anim1 = document.getElementById('ani1');
let anim2 = document.getElementById('ani2');
let button = document.getElementById('button');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const myModal1 = new bootstrap.Modal(document.getElementById('myModal1'));
const myModal2 = new bootstrap.Modal(document.getElementById('myModal2'));

button.addEventListener('click', function (){
    myModal.show();
});
button1.addEventListener('click', function (){
    myModal1.show();
});
button2.addEventListener('click', function (){
    myModal2.show();
});
reset1.addEventListener('click', function(event){
    let bgcolor = '#683F3E';
    page1.style.backgroundColor = bgcolor;
    page1nav.style.backgroundColor = '#9B7845';
    disney1.style.color = 'white';
    disney2.style.color = 'white';
    page1foot.style.backgroundColor = '#9B7845';
    anim1.style.color = 'white';
    anim2.style.color = 'white';
    button.style.backgroundColor = '#5592D9';
    button.style.borderColor = '#9B7845';
    button1.style.backgroundColor = '#5592D9';
    button1.style.borderColor = '#9B7845';
    button2.style.backgroundColor = '#5592D9';
    button2.style.borderColor = '#9B7845';
    reset1.style.backgroundColor = '#5592D9';
    reset1.style.borderColor = '#9B7845';
    reset2.style.backgroundColor = '#5592D9';
    reset2.style.borderColor = '#9B7845';
});
reset2.addEventListener('click', function(event){
    let bgcolor = '#A5D9FA';
    page1.style.backgroundColor = bgcolor;
    page1nav.style.backgroundColor = '#DBCBA2';
    disney1.style.color = '#2674D0';
    disney2.style.color = '#2674D0';
    page1foot.style.backgroundColor = '#DBCBA2';
    anim1.style.color = '#2674D0';
    anim2.style.color = '#2674D0';
    button.style.backgroundColor = '#415D73';
    button.style.borderColor = '#DBCBA2';
    button1.style.backgroundColor = '#415D73';
    button1.style.borderColor = '#DBCBA2';
    button2.style.backgroundColor = '#415D73';
    button2.style.borderColor = '#DBCBA2';
    reset1.style.backgroundColor = '#415D73';
    reset1.style.borderColor = '#DBCBA2';
    reset2.style.backgroundColor = '#415D73';
    reset2.style.borderColor = '#DBCBA2';
});