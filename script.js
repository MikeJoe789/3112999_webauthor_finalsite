let menuButton=document.querySelector('#menuButton')
let menu = document.querySelector('#header nav')
menuButton.addEventListener("click",()=>{
    menu.classList.toggle("open")
})

new Splide( '#image-carousel').mount();
