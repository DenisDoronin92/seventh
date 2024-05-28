


//Задание 1. (Почему то обращение только по id(это что касается id "out") получилось сделать, когда указывал класс выдавал ошибку.)
let butt = document.querySelector('.btn')
let a = document.querySelector('.inputIn3')
function summm (){
    let b = a.value
    document.getElementById('out').innerHTML = b
    return  
}
butt.onclick = summm

//Задание 2


let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let d = document.querySelector('.inputIn');
let c = document.querySelector('.inputIn2');

function summ() {
  let b = Number(d.value) + Number(c.value);
  document.getElementById('out2').innerHTML = b;
  return
}
plus.onclick = summ;


function vich() {
    let b = Number(d.value) - Number(c.value);
    document.getElementById('out2').innerHTML = b;
    return
  }  
  minus.onclick = vich;


  function umn() {
    let b = Number(d.value) * Number(c.value);
    document.getElementById('out2').innerHTML = b;
    return
  }  
  multiply.onclick = umn;


  function del() {
    let b = Number(d.value) / Number(c.value);
    document.getElementById('out2').innerHTML = b;
    return
  }  
  divide.onclick = del;