// 1. Confetti Celebration
function celebrate() {
    var section = document.getElementById('timeline-start');
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    function randomInOut(min, max) { return Math.random() * (max - min) + min; }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInOut(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInOut(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

// 2. Music Player
const playBtn = document.getElementById('playMusicBtn');
const music = document.getElementById('bgMusic');
let isPlaying = false;

if(playBtn && music) {
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            playBtn.innerText = "🎵 Play Our Song";
            playBtn.style.background = "var(--dark-pink)";
        } else {
            music.play().then(() => {
                playBtn.innerText = "⏸️ Pause Song";
                playBtn.style.background = "var(--deep-red)";
            }).catch(error => {
                alert("Click again to play music!");
            });
        }
        isPlaying = !isPlaying;
    });
}

// Mobile Tap for Flip Cards
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.flip-card-inner').style.transform = 
            card.querySelector('.flip-card-inner').style.transform === 'rotateY(180deg)' 
            ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
});