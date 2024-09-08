// Animate the buttons with elastic effect on load
gsap.from(".btn", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.3
});

// Animate sections when scrolling into view
gsap.from("section", {
    scrollTrigger: {
        trigger: "section",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1.2,
    opacity: 0,
    y: 100,
    stagger: 0.3,
    ease: "back.out(1.7)"
});

// Add hover animations on the buttons
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            borderColor: "rgba(255, 105, 180, 1)",
            duration: 0.5,
            borderWidth: "4px"
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            borderColor: "transparent",
            duration: 0.5,
            borderWidth: "2px"
        });
    });
});

// Menu button and decomposition effect
const menuButton = document.getElementById('menu-button');
const navbarMenu = document.getElementById('navbar-menu');

// Show the menu on hover
menuButton.addEventListener('mouseenter', () => {
    if (navbarMenu.classList.contains('hidden')) {
        navbarMenu.classList.remove('hidden');
        navbarMenu.classList.add('visible');
    }
});

// Hide the menu with the decompose effect
navbarMenu.addEventListener('mouseleave', () => {
    closeMenuWithDecompose();
});

// Function to close the menu with decompose animation
function closeMenuWithDecompose() {
    navbarMenu.classList.add('decompose');  // Trigger decompose animation
    setTimeout(() => {
        navbarMenu.classList.add('hidden');  // Hide menu after animation
        navbarMenu.classList.remove('visible');
        navbarMenu.classList.remove('decompose');  // Reset decompose class
    }, 1000);  // Match animation duration (1s in this case)
}

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navbarMenu.contains(event.target) && event.target !== menuButton) {
        closeMenuWithDecompose();
    }
});
