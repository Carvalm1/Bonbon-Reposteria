// script.js
document.getElementById('searchBar').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.recipe-card');
  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});
