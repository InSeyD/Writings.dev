let burger = document.querySelector('.burger');
let menu = document.querySelector ('.menu__burger');
let cross = document.querySelector ('.cross');

burger.addEventListener('click', function(){
    menu.style["display"] = "flex";
})

cross.addEventListener ('click', function(){
    menu.style["display"] = "none";
})