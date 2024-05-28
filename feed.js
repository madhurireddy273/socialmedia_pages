// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.action-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked ${button.innerText}`);
        });
    });
});

function navigateTo(page) {
    window.location.href = page;
}
