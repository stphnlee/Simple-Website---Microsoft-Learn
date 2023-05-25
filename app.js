'use strict';
// Get the button element with class 'btn'
const switcher = document.querySelector('.btn');

// Add a click event listener to the button
switcher.addEventListener('click',function() {
    // Toggle the 'light-theme' and 'dark-theme' classes on the body element
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // Get the current class name of the body element
    const className = document.body.className;

    // Update the button text based on the current class name
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    // Log the current class name to the console
    console.log('current class name: ' + className);    
});