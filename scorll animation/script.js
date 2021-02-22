const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const windowHeight = window.innerHeight / 5 * 4; 
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < windowHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}