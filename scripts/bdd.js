// GSAP Animation for the BDD page
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// BDD Scenario Simulation
document.getElementById("run-bdd").addEventListener("click", function () {
    let given = document.getElementById("given").value;
    let when = document.getElementById("when").value;
    let then = document.getElementById("then").value;
    let resultContainer = document.getElementById("bdd-result");

    if (given && when && then) {
        resultContainer.textContent = `Scenario: Given ${given}, When ${when}, Then ${then}.`;
        Swal.fire({
            title: 'Scenario Executed!',
            text: `Given ${given}, When ${when}, Then ${then}.`,
            icon: 'success'
        });
    } else {
        Swal.fire({
            title: 'Incomplete Scenario!',
            text: 'Please fill in all fields.',
            icon: 'error'
        });
        resultContainer.textContent = "Error: Please fill in all fields.";
    }
});

// Quiz section
document.getElementById("quiz-answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct!',
        text: '"Given" represents the initial condition.',
        icon: 'success'
    });
});

document.getElementById("quiz-answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: '"Given" does not represent an action.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: '"Given" represents a condition, not a result.',
        icon: 'error'
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
