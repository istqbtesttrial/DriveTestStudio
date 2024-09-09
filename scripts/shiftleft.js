// GSAP Animation for the page
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Example 1: Static Code Analysis Simulation with Log Output and Code Display
document.getElementById("run-static-analysis").addEventListener("click", function () {
    let logContainer = document.getElementById("static-analysis-log");
    logContainer.style.display = "block";
    logContainer.textContent = "Starting static analysis on main.js...\n";

    setTimeout(() => {
        logContainer.textContent += "Analyzing file: main.js...\n";
    }, 1000);

    setTimeout(() => {
        logContainer.textContent += "Checking for syntax errors...\n";
    }, 2000);

    setTimeout(() => {
        logContainer.textContent += "Checking for code smells...\n";
    }, 3000);

    setTimeout(() => {
        logContainer.textContent += "No issues found. Static analysis passed.\n";
    }, 4000);
});

// Example 2: Unit Test Simulation with Log Output and Code Display
document.getElementById("run-unit-tests").addEventListener("click", function () {
    let logContainer = document.getElementById("unit-tests-log");
    logContainer.style.display = "block";
    logContainer.textContent = "Starting unit tests on add() and subtract() functions...\n";

    setTimeout(() => {
        logContainer.textContent += "Running test: shouldAddTwoNumbers...\n";
    }, 1000);

    setTimeout(() => {
        logContainer.textContent += "✔ Test passed: add(2, 2) = 4\n";
    }, 2000);

    setTimeout(() => {
        logContainer.textContent += "Running test: shouldSubtractTwoNumbers...\n";
    }, 3000);

    setTimeout(() => {
        logContainer.textContent += "✔ Test passed: subtract(5, 2) = 3\n";
    }, 4000);

    setTimeout(() => {
        logContainer.textContent += "All unit tests passed.\n";
    }, 5000);
});

// Quiz section
document.getElementById("quiz-answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct!',
        text: 'Shift Left Testing means starting testing earlier in the development process.',
        icon: 'success'
    });
});

document.getElementById("quiz-answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'Shift Left Testing is about testing earlier, not delaying testing.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'Shift Left Testing is not limited to the last phase of the project.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer4").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'Shift Left Testing aims to improve the efficiency of testing, not reduce efforts.',
        icon: 'error'
    });
});
