let menuButton=document.querySelector('#menuButton')
let menu = document.querySelector('#header nav ul')
menuButton.addEventListener("click",()=>{
    menu.classList.toggle("open")
})