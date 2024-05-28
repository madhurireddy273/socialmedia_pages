// Add this to scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const eventButtons = document.querySelectorAll('.event-actions .action-btn');
    eventButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked ${button.innerText} for the event`);
        });
    });
});

function navigateTo(page) {
    window.location.href = page;
}
