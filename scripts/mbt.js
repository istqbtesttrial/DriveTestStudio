// GSAP Animation for the page
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Example 1: Generate Test Cases from a Model
document.getElementById("generate-test-cases").addEventListener("click", function () {
    let logContainer = document.getElementById("generated-test-cases-log");
    logContainer.style.display = "block";
    logContainer.textContent = "Generating test cases from the model...\n";

    setTimeout(() => {
        logContainer.textContent += "Test case 1: When user logs in, the system should transition from 'idle' to 'loggedIn'.\n";
    }, 1000);

    setTimeout(() => {
        logContainer.textContent += "Test case 2: When user logs out, the system should transition from 'loggedIn' to 'loggedOut'.\n";
    }, 2000);

    setTimeout(() => {
        logContainer.textContent += "All test cases generated successfully.\n";
    }, 3000);
});

// Example 2: Simulate Model-Based Testing in a Project
document.getElementById("run-mbt-simulation").addEventListener("click", function () {
    let logContainer = document.getElementById("mbt-simulation-log");
    logContainer.style.display = "block";
    logContainer.textContent = "Running model-based testing simulation...\n";

    setTimeout(() => {
        logContainer.textContent += "Initializing system model...\n";
    }, 1000);

    setTimeout(() => {
        logContainer.textContent += "Generating test cases from the model...\n";
    }, 2000);

    setTimeout(() => {
        logContainer.textContent += "✔ Test case 1 passed: System transitioned from 'idle' to 'loggedIn'.\n";
    }, 3000);

    setTimeout(() => {
        logContainer.textContent += "✔ Test case 2 passed: System transitioned from 'loggedIn' to 'loggedOut'.\n";
    }, 4000);

    setTimeout(() => {
        logContainer.textContent += "Model-based testing completed successfully.\n";
    }, 5000);
});

// Quiz section
document.getElementById("quiz-answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct!',
        text: 'Model-Based Testing generates tests based on the system model.',
        icon: 'success'
    });
});

document.getElementById("quiz-answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'MBT encourages testing early, not delaying it.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'MBT helps generate tests automatically, reducing the need for manual test writing.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer4").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'MBT relies heavily on models to drive the testing process.',
        icon: 'error'
    });
});
