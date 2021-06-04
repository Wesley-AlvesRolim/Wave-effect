const audio = document.querySelector('audio')
const p = document.querySelector('.text-block');
const form = document.querySelector('form');
const input = document.querySelector('input');

audio.volume = .3;

function showText(e) {
    e.preventDefault();

    const input = document.querySelector('input');
    p.innerHTML = input.value.replace(/\S/g, '<span class="text">$&</span>');
    form.remove();
    p.insertAdjacentHTML('afterEnd', '<a href="/">Voltar</a>');
    activeAnimation();
};

function activeAnimation() {
    const text = Array.from(document.querySelectorAll('span.text'));
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');

        text.forEach((el, index) => {
            el.classList.toggle('active');
            el.style.animationDelay = index * 0.1 + 's';
        })
    })
}

document.addEventListener('submit', showText)
input.addEventListener('focus', () => {
    input.addEventListener('input', () => {
        if (input.value.length >= 20) {
            input.value = input.value.slice(0, -1)
        }
    })
})