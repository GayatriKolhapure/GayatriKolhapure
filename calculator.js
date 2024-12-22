function appendValue(value) {
    const display = document.querySelector('.display input');
    display.value += value;
}

function clearDisplay() {
    const display = document.querySelector('.display input');
    display.value = '';
}

function deleteLast() {
    const display = document.querySelector('.display input');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.querySelector('.display input');
    try {
        // Replace trigonometric and special functions
        const expression = display.value
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/\^/g, '**') // for power
            .replace(/sqrt\(/g, 'Math.sqrt(');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
 // Toggle Functionality
 function toggleScientificMode() {
    const scientificKeys = document.querySelector('.scientific-keys');
    scientificKeys.style.display = 
        scientificKeys.style.display === 'none' ? 'flex' : 'none';
}
