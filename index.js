
// Store the history in an array
let history = [];

// Function to update the history list
function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    // Show only the last ten history items
    const startIndex = Math.max(history.length - 10, 0);

    for (let i = startIndex; i < history.length; i++) {
        const li = document.createElement('li');
        li.textContent = history[i];
        historyList.appendChild(li);
    }
}

// Function to perform the calculation
function Calculate() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value);
        resultField.value = result;
        history.push(resultField.value); // Store the calculation in the history
        updateHistory(); // Update the history display
    } catch (error) {
        resultField.value = 'Error';
    }
}

// Function to handle button clicks
function display(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

// Function to clear the calculator
function clearCalculator() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}
function del(){
        let resultField = document.getElementById("result");
        resultField.value = resultField.value.slice(0,-1);
}    
// Add event listeners to calculator buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                buttonClick(` ${button.textContent} `); // Add space around operators
            } else if (button.textContent === '=') {
                calculate();
            } else if (button.textContent === 'C') {
                clearCalculator();
            } else {
                buttonClick(button.textContent);
            }
        });
    });
});
