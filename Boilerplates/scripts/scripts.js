// zmiana koloru czcionki i tła

const checkbox = document.querySelector('#theme-color');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
   body.classList.toggle('dark-theme');
})

// document.querySelector('#theme-color').addEventListener('change', () => {
//    document.querySelector('body').classList.toggle('dark-theme');
// })







// powiększenie tekstu na stronie / zmniejszenie

const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const decrementBtn = document.querySelector('#decrement');

let root = document.querySelector(':root');

let a = 10;

incrementBtn.addEventListener('click', () => {
   a += 1; // a = a + 1
   console.log(a);
   
   if(a <= 30 ) {
      root.style.setProperty('font-size', `${a}px`);
   }
})

decrementBtn.addEventListener('click', () => {
   a -= 1; // a = a + 1
   console.log(a);
      root.style.setProperty('font-size', `${a}px`);  
})

reset.addEventListener('click', () => {
   a = 10
   console.log(a);
   root.style.setProperty('font-size', `${a}px`);
})



