// Tab toggle functionality for homepage

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");
    const tabContent = document.getElementById(tabId);

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      if (content !== tabContent) content.style.display = "none";
    });

    // Toggle selected tab content
    if (tabContent.style.display === "block") {
      tabContent.style.display = "none";
    } else {
      tabContent.style.display = "block";
    }
  });
});

// Optional: Simple search bar filter on homepage recipe titles (if you add them later)
document.addEventListener('DOMContentLoaded', () => {
  const servingsInput = document.getElementById('servings');
  const ingredients = document.querySelectorAll('#ingredient-list li');

  function updateIngredients() {
    const servings = parseFloat(servingsInput.value);
    ingredients.forEach(li => {
      const base = parseFloat(li.dataset.base);
      const updatedAmount = (base * servings / 4).toFixed(2); // assuming 4 is the original base
      const unit = li.textContent.split(' ').slice(2).join(' ');
      li.textContent = `${updatedAmount} ${unit}`;
    });
  }

  servingsInput.addEventListener('input', updateIngredients);
});
