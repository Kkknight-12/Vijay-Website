var button = document.getElementById('read-more');
var close = document.getElementById('close');
var modal = document.getElementById('modal');
// let container = document.body

// when you open modal you put display type to block
button.addEventListener('click', function (event) {
   
    event.preventDefault();
    console.log('iran')                               
    modal.style.display = 'block';                        
});                                                     

// when you close modal you change display type to none
close.addEventListener('click', function (event) {      
    event.preventDefault();                               
    modal.style.display = 'none';                         
}); 

window.onclick = function(event) {
  if (event.target.classList == 'modal-backdrop') {
    modal.style.display = "none";
  }
}

const body = document.body;
const nav = document.querySelector(".navbar");
const menu = document.querySelector(".navbar .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener( "scroll", () => {

  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
  console.log(lastScroll)
});
