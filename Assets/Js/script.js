/* Criação de variaveis*/
const p = document.querySelector('.text-block');
const form = document.querySelector('form');
const input = document.querySelector('input');
const contentText = document.querySelector('.content-text');

function loadingMedia() {
    const audio = document.querySelector('audio')
    const video = document.querySelector('video')
    audio.src = 'https://soundbible.com/mp3/Beach%20Waves-SoundBible.com-1024681188.mp3'
    audio.volume = .3;
    audio.autoplay = true;
    audio.loop = true;
    video.src = 'https://static.videezy.com/system/resources/previews/000/047/703/original/36.mp4'
    video.autoplay = true;
    video.loop = true;
}

function showText(e) {
    e.preventDefault();

    const input = document.querySelector('input');
    p.innerHTML = input.value.replace(/\S/g, '<span class="text">$&</span>');
    contentText.classList.add('active')
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


window.addEventListener('load', loadingMedia)
document.addEventListener('submit', showText)
input.addEventListener('focus', () => {
    input.addEventListener('input', () => {
        if (input.value.length >= 20) {
            input.value = input.value.slice(0, -1)
        }
    })
})