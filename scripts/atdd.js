// GSAP Animation for the page
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Initialize the Ace Editor for ATDD example
let atddEditor = ace.edit("atdd-editor");
atddEditor.setTheme("ace/theme/monokai");
atddEditor.session.setMode("ace/mode/javascript");

// Preload example ATDD scenario
let atddExample =
    `Scenario: Purchase a product online
  Given a user is on the product page
  When the user adds a product to the cart
  And proceeds to checkout
  Then the user should see the total price and confirm the purchase`;

// Set example scenario in the editor
atddEditor.setValue(atddExample, 1);

// Button references
let runAtddButton = document.getElementById("run-atdd-code");

// Run acceptance test
runAtddButton.addEventListener("click", function () {
    let scenario = atddEditor.getValue();  // Get the scenario from the editor
    let resultContainer = document.getElementById("atdd-result");

    try {
        // Simulate test result (for now just a success message)
        resultContainer.innerHTML = "<p class='text-green-600'>Acceptance Test Passed!</p>";
    } catch (error) {
        resultContainer.innerHTML = "<p class='text-red-600'>Test Failed: " + error.message + "</p>";
    }
});

// Quiz Section
document.getElementById("answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'ATDD involves collaboration with more than just developers.',
        icon: 'error'
    });
});

document.getElementById("answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'Testers alone do not write acceptance tests in ATDD.',
        icon: 'error'
    });
});

document.getElementById("answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct!',
        text: 'ATDD requires collaboration between developers, testers, and stakeholders.',
        icon: 'success'
    });
});

// Hamburger Menu functionality
const menuButton = document.getElementById('menu-button');
const navbarMenu = document.getElementById('navbar-menu');

// Toggle menu visibility
menuButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
    navbarMenu.classList.toggle('visible');
});
