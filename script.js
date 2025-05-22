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
