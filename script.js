document.addEventListener('DOMContentLoaded', () => {
  const servingsInput = document.getElementById('servings');
  const ingredients = document.querySelectorAll('#ingredient-list li');

  if (servingsInput && ingredients.length > 0) {
    function updateIngredients() {
      const servings = parseFloat(servingsInput.value);
      ingredients.forEach(li => {
        const base = parseFloat(li.dataset.base);
        const unit = li.textContent.split(' ').slice(2).join(' ');
        const updatedAmount = (base * servings / 4).toFixed(2);
        li.textContent = `${updatedAmount} ${unit}`;
      });
    }

    servingsInput.addEventListener('input', updateIngredients);
  }
});
