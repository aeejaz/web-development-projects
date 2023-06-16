const imageEl = document.querySelector('.image');
const nextEl = document.getElementById('next');
const previousEl = document.getElementById('previous');

let x = 0;
let timer;
// nextEl.addEventListener('click', () =>{
//     x = x - 90;
//     updateGallery();
//     clearTimeout(timer);
// });

previousEl.addEventListener('click', () =>{
    x = x + 90;
    updateGallery();
    clearTimeout(timer);
});

updateGallery();
function updateGallery() {
    imageEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() =>{
        x = x - 45;
        updateGallery();
    }, 1250);
}
