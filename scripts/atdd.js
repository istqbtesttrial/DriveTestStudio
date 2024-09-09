// GSAP Animation for the page
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Interactive ATDD test for user account creation
document.getElementById("create-account").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let resultContainer = document.getElementById("account-result");

    // Simple validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Invalid Email!',
            text: 'Please enter a valid email address.',
            icon: 'error'
        });
        resultContainer.textContent = "Email validation failed.";
        return;
    }

    if (!passwordRegex.test(password)) {
        Swal.fire({
            title: 'Invalid Password!',
            text: 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number.',
            icon: 'error'
        });
        resultContainer.textContent = "Password validation failed.";
        return;
    }

    if (name.trim() === "") {
        Swal.fire({
            title: 'Name Required!',
            text: 'Please enter your name.',
            icon: 'error'
        });
        resultContainer.textContent = "Name validation failed.";
        return;
    }

    // Simulate account creation success
    Swal.fire({
        title: 'Account Created!',
        text: 'Your account has been successfully created.',
        icon: 'success'
    });
    resultContainer.textContent = "Your account has been successfully created.";
});

// Quiz section
document.getElementById("quiz-answer4").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct!',
        text: 'All fields are mandatory when creating an account.',
        icon: 'success'
    });
});

document.getElementById("quiz-answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'While the password is mandatory, all fields are required.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'The name is mandatory, but all fields are required.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'The email is mandatory, but all fields are required.',
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
