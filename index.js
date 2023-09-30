const alarmEl = document.querySelector('.alarm');
let seconds = Number(prompt('Kolik vteřin má uplynout než minutka začne zvonit?')) || 5;
if (alarmEl) {
    const timeoutId = setTimeout(() => {
        alarmEl.classList.add('alarm--ring');
        const audio = document.querySelector('audio');
        if (audio) {
            audio.play();
        }
    }, seconds * 1000);
    const btn = document.querySelector('.btn--cancel');
    if (btn) {
        btn.addEventListener('click', () => {
            clearTimeout(timeoutId);
        });
    }
}