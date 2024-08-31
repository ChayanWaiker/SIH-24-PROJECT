document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('show-text');
        const back = this.querySelector('.back');
        back.textContent = this.getAttribute('data-text');
    });
});