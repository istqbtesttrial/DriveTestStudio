// GSAP Animation for the Red-Green-Refactor Cycle
gsap.from(".red-box", {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power2.out"
});

gsap.from(".green-box", {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power2.out",
    delay: 0.5
});

gsap.from(".refactor-box", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 1
});

// Initialize the Ace Editor and set its theme and language
let editor = ace.edit("code-editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Preload example code in the editor
let exampleCode =
    `function add(a, b) {
    return a + b;
}

// Test case that should fail first (as an example)
let result = add(2, 2);
if (result !== 5) {
    throw new Error('Test failed: 2 + 2 should equal 5');
}`;

editor.setValue(exampleCode, 1);  // Load the example code into the editor

// Button references
let runButton = document.getElementById("run-code");

// Run test and change to refactor when passed
runButton.addEventListener("click", function () {
    let code = editor.getValue();  // Get code from editor
    let resultContainer = document.getElementById("result");

    try {
        // Evaluate the code
        eval(code);
        resultContainer.innerHTML = "<p class='text-green-600'>Test Passed!</p>";

        // Change the button text to "Refactor" and switch its function
        runButton.innerText = "Refactor";

        // Remove old event listener to avoid running tests again
        runButton.replaceWith(runButton.cloneNode(true));
        runButton = document.getElementById("run-code");

        // Add new event listener for refactoring
        runButton.addEventListener("click", function () {
            refactorCode();
        });

    } catch (error) {
        resultContainer.innerHTML = "<p class='text-red-600'>Test Failed: " + error.message + "</p>";
    }
});

// Function to refactor the code and update the editor
function refactorCode() {
    let refactoredCode =
        `// Improved function name and added comments
function sumTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// Test the refactored function
let result = sumTwoNumbers(2, 2);
if (result !== 4) {
    throw new Error('Test failed: 2 + 2 should equal 4');
}`;

    editor.setValue(refactoredCode, 1);  // Load the refactored code into the editor

    // Update the result container to show the refactored message
    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<p class='text-blue-600'>Code Refactored!</p>";

    // Optionally disable the button or change it again for further steps
    runButton.disabled = true;
    runButton.innerText = "Refactored";
}

// Quiz Section
document.getElementById("answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'Red is for writing failing tests!',
        icon: 'error'
    });
});

document.getElementById("answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect!',
        text: 'Green is for making the test pass.',
        icon: 'error'
    });
});

document.getElementById("answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct!',
        text: 'Refactor is the correct answer!',
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
