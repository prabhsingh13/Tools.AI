// Get the header element
var header = document.getElementById("mainHeader");

// Track the last scroll position
var lastScrollTop = 0;

// Function to handle scroll events
function handleScroll() {
    var currentScrollTop = window.scrollY;

    // Check if scrolling up
    if (currentScrollTop > lastScrollTop) {
        header.classList.add("nav-background");
    } else {
        header.classList.remove("nav-background");
    }

    // Update the last scroll position
    lastScrollTop = currentScrollTop;
}

// ----------------------------------------------------------------------------
