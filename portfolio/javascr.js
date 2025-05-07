document.querySelector('.button_submit') ,onclick = MyClick;


function MyClick(){
let a = document.querySelector('.footer_right_input').value;
let c = document.querySelector('#black').value;

 let b = document.querySelector('.footer_right_input2').value;
 
 console.log(`Имя пользователя: ${a}|Электронная почта: ${c}| сообщение пользователя вам:${b}|`);
}
