document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const title = document.querySelector('.main-title');
    const btn = document.querySelector('.detail-btn');

    const phrases = [
        "오늘도 힘내세요!",
        "이대로 계속 가봅시다!",
        "오늘도 해냈어요!",
        "조금씩 나아지고 있어요!"
    ];

    let currentIndex = 0;
    let isTransitioning = false;

    // Set initial state class on the card
    card.classList.add('state-0');

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (isTransitioning) return;
        isTransitioning = true;

        // Calculate next index
        const nextIndex = (currentIndex + 1) % phrases.length;

        // Fade out the title
        title.classList.add('transition-out');

        // After fade out completes, change text, change theme class, and fade in
        setTimeout(() => {
            // Remove previous state class and add new one
            card.classList.remove(`state-${currentIndex}`);
            card.classList.add(`state-${nextIndex}`);

            // Change title text
            title.textContent = phrases[nextIndex];

            // Trigger reflow to restart any CSS animations if needed, and fade in
            title.classList.remove('transition-out');
            
            currentIndex = nextIndex;
            isTransitioning = false;
        }, 250); // Matches the 0.25s transition-out duration in CSS
    });
});
