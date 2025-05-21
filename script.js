document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");
    const content = dropdown.querySelector(".dropdown-content");

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      closeAllDropdowns();
      content.style.display = "block";
    });
  });

  window.addEventListener("click", function () {
    closeAllDropdowns();
  });

  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      content.style.display = "none";
    });
  }
});
