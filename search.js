// Add this to scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            // Simulate fetching and displaying search results
            document.querySelector('.results').innerHTML = `<p>Displaying results for ${tab.dataset.tab}</p>`;
        });
    });
});
