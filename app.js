const submit = document.getElementById('submit');
const email = document.getElementById('email');

submit.addEventListener('click', () => {
    if(email.value == ""){
        alert('Plase enter your maill')
    } else {
        alert(`Your email has been sent :)`)
    }
    
})

// Menu responsive bar
const menuBar = document.querySelector('.menu-res-bar');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3');
const navUl = document.querySelector('nav ul');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('position-fixed');
    // Three line dot menu for responsive
    span2.classList.toggle('display-none');
    span1.classList.toggle('rotate1')
    span3.classList.toggle('rotate2');
    span3.classList.toggle('margin-top');

    // Navbar menu
    navUl.classList.toggle('navUl')
})

