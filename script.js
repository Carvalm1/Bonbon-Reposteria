const searchBar = document.getElementById('searchBar');
const recipeGrid = document.getElementById('recipeGrid');

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();

  const cards = recipeGrid.querySelectorAll('.recipe-card');

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();

    if (title.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
