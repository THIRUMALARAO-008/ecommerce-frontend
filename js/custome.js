// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is successfully connected and running!');

    // 1. Interactive Article Greeting
    const mainArticle = document.querySelector('main');
    
    // Create an interactive button element
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Click for a Greeting';
    alertButton.style.cssText = 'padding: 10px 15px; margin-top: 15px; background: #35424a; color: white; border: none; border-radius: 4px; cursor: pointer;';
    
    // Append the button to the main content area
    mainArticle.appendChild(alertButton);

    // Handle the button click event
    alertButton.addEventListener('click', () => {
        alert('Hello! Thanks for interacting with this sample page.');
    });


    // 2. Simple Counter in the Sidebar
    const sidebar = document.querySelector('aside');
    let count = 0;

    // Create counter structure
    const counterContainer = document.createElement('div');
    counterContainer.innerHTML = `
        <h4 style="margin-top: 20px;">Interactive Counter</h4>
        <p>Current Count: <span id="counter-value">0</span></p>
        <button id="increment-btn" style="padding: 5px 10px; cursor: pointer;">+ Add 1</button>
    `;
    sidebar.appendChild(counterContainer);

    // Hook elements and listen for actions
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');

    incrementBtn.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
        // Make the text turn green temporarily on update
        counterValue.style.color = 'green';
        setTimeout(() => counterValue.style.color = 'black', 300);
    });
});