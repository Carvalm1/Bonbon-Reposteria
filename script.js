document.addEventListener('DOMContentLoaded', function () {
  const bakingMenu = document.querySelector('.baking-menu');
  const foodMenu = document.querySelector('.food-menu');

  if (bakingMenu) {
    bakingMenu.addEventListener('click', function () {
      document.querySelector('.baking-submenu').classList.toggle('show');
    });
  }

  if (foodMenu) {
    foodMenu.addEventListener('click', function () {
      document.querySelector('.food-submenu').classList.toggle('show');
    });
  }
});
