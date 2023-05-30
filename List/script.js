function createtags(input) {
    const tags = input.split(",").map(tag => tag.trim()).filter(tag => tag !== '');

    t.innerHTML = "";

    tags.forEach(tag => {
        const tagEL = document.createElement("span");
        tagEL.classList.add("bg-yellow-500", "py-2", "px-4", "rounded-full");
        tagEL.innerHTML = tag;
        t.appendChild(tagEL);
    });
}
const t = document.querySelector('.tags');
const textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', (e) => {
    
    createtags(e.target.value);
});
