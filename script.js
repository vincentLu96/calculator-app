let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

/*
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}
*/

function calculatePercentage() {
    try {
        currentInput = (eval(currentInput) / 100).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}
function scientificCalc(operation) {
    try {
        let value = eval(currentInput);
        let result;
        
        switch(operation) {
            case 'sin':
                result = Math.sin(value * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(value * Math.PI / 180);
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'pow':
                result = Math.pow(value, 2);
                break;
            default:
                result = value;
        }
        
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}