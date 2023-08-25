const header = document.getElementById('head');
const brandElement = document.getElementById('brand');
const menuElement = document.getElementById('menu');

function changeFontColorOnScroll() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 200) {
        brandElement.style.color = 'black';
        menuElement.style.color = 'black';
    } else {
        brandElement.style.color = 'white';
        menuElement.style.color = 'white';
    }
}

window.addEventListener('scroll', changeFontColorOnScroll);

function resetFontColor() {
    brandElement.style.color = 'white';
    menuElement.style.color = 'white';
}

window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        resetFontColor();
    }
})

const form = document.getElementById('form');
const scrollThreshold = 2200;
let fromVisible = false;

function handleScroll() {
    const scrollPosition = window.scrollY;

    if (!fromVisible && scrollPosition > scrollThreshold) {
        form.classList.remove('hidden');
        fromVisible = true;
    }
}

window.addEventListener('scroll', handleScroll);

const expandButtons = document.querySelectorAll(".expand-button");

expandButtons.forEach(button => {
  button.addEventListener("click", function () {
    const question = button.closest(".question");
    question.classList.toggle("show-answer");
  });
});
