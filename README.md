<!-- README.md -->
# Bombóncito 🍬

A cozy baking and recipe blog.

## Structure
- `index.html`: Homepage with navigation, recipe cards, and search.
- `style.css`: Styling for layout, header, navbar, and cards.
- `script.js`: JavaScript for dropdowns and search filtering.
- `contact.html`: Page with contact form.
- `share.html`: Page with social media share buttons.
- Category pages: `sweet.html`, `salty.html`, `beef.html`, etc.

## Getting Started
Simply open `index.html` in your browser or host using GitHub Pages.

---

<!-- style.css -->
body {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  background-color: #fff0f5;
  margin: 0;
  padding: 0;
  color: #333;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffe4e1;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  width: 60px;
  height: auto;
}

.search-container input {
  padding: 0.5rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.navbar ul {
  list-style-type: none;
  background-color: #ffb6c1;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.navbar ul li {
  position: relative;
}

.navbar ul li a {
  display: block;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffc0cb;
  min-width: 150px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content li a {
  padding: 0.5rem;
  color: #333;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.recipe-card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 1rem;
}

footer {
  background-color: #ffe4e1;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

/* Icons */
.fas {
  margin-right: 5px;
}

---

<!-- script.js -->
document.getElementById('searchBar').addEventListener('input', function (e) {
  const filter = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.recipe-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});

---

<!-- contact.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Me - Bombóncito</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="main-header">
    <img src="logo.png" alt="Logo" class="logo">
    <h1>Contact Me</h1>
  </header>
  <main>
    <form class="contact-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5"></textarea>
      <button type="submit">Send</button>
    </form>
  </main>
</body>
</html>

---

<!-- share.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Share - Bombóncito</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="main-header">
    <img src="logo.png" alt="Logo" class="logo">
    <h1>Share Bombóncito</h1>
  </header>
  <main>
    <p>Share with your friends:</p>
    <div class="share-buttons">
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="mailto:?subject=Check%20out%20Bomboncito&body=https://yourwebsite.com">Email</a>
    </div>
  </main>
</body>
</html>

---

<!-- sweet.html (sample category page) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sweet Recipes - Bombóncito</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="main-header">
    <img s
