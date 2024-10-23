const menu = document.querySelector('.menu');

const list = document.querySelector('.navigation');

const body = document.querySelector('body');


const anchors = document.querySelectorAll('a[href*="#"]')

menu.addEventListener('click', function() {
    list.classList.toggle('open');
    body.classList.toggle('hidden');    
})

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();    
        list.classList.remove('open');
        body.classList.remove('hidden');
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })    
}
