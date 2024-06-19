const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
const navbar = document.querySelector('.navbar-nav');
console.log(navbar);
hamburger.addEventListener('click',()=>{
navbar.classList.toggle('nav--visible')
})