var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */
    cat.setAttribute("src", "./img/jumping-cat.jpg");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLM8Io9VgNU6oJBI_9or6x08j9wG_NpJ1tMXOmwFqVXAotvdYv");
});