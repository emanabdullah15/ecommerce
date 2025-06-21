function performSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    // Example data (replace with actual items/pages of your site)
    const items = [
        { name: "men jackets", url: "men.html" },
        { name: "women dresses", url: "women.html" },
        { name: "kids shoes", url: "kid.html" },
        { name: "summer collection", url: "explore.html" },
    ];

    // Search logic
    const result = items.find(item => item.name.includes(query));

    if (result) {
        window.location.href = result.url;
    } else {
        alert("No results found for: " + query);
    }
}
function toggleMenu() {
    const navList = document.querySelector(".navbar ul");
    navList.classList.toggle("show");
}

// Optional: Run search when user presses Enter
document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        performSearch();
    }
});