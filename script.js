const noButton = document.querySelector('.no-btn');
const container = document.querySelector('.container');
const questionLabel = document.querySelector('.question');
const answerLabel = document.querySelector('.answer');

const containerRect = container.getBoundingClientRect();
const noBtnRect = noButton.getBoundingClientRect();

noButton.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height));
    
    noButton.style.left = i + 'px';
    noButton.style.top = j + 'px';
});

const yesButton = document.querySelector('.yes-btn');
yesButton.addEventListener('click', () => {
    questionLabel.hidden = true;
    answerLabel.hidden = false;
    showFireworks();
});

function showFireworks() {
    setInterval(createFirework, 100); // Adjust the interval as needed
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(firework);
    
    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}
