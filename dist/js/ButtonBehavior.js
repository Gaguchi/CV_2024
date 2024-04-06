// Declare a global variable for the intervalId
let intervalId = null;

// Function to start the interval
function startInterval(buttons, scale, sectionId) {
    // Get the section element
    const section = document.getElementById(sectionId);

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the section is in view, start the interval
            if (entry.isIntersecting) {
                // Clear any existing interval
                if (intervalId) {
                    clearInterval(intervalId);
                }

                let activeButtonSet = 1;

                // Get the maximum set number
                const maxSet = Math.max(...buttons.map(button => button.set));

                // Create an interval that updates the activeButtonSet every second
                intervalId = setInterval(() => {
                    // Add the 'animactive' class to the buttons in the new set
                    const newSetButtons = document.querySelectorAll(`.set-${activeButtonSet}`);
                    newSetButtons.forEach(button => {
                        button.classList.add('animactive');
                        // Change the last string in the svg from "w" to "1"
                        const img = button.querySelector('img');
                        img.src = img.src.replace('-w.svg', '-1.svg');
                        // Change the transform and padding-bottom styles
                        button.style.transform = `scale(${scale - 0.2})`;
                        img.style.transform = `scale(${scale - 0.3})`;
                        img.style.paddingBottom = '15px';
                        // Change the opacity of the span
                        const span = button.querySelector('span');
                        span.style.opacity = '1';
                    });

                    // Update the activeButtonSet
                    activeButtonSet = activeButtonSet < maxSet+1 ? activeButtonSet + 1 : 1;

                    // If the activeButtonSet is the first set, remove the 'animactive' class from all buttons
                    if (activeButtonSet === 1) {
                        const allButtons = document.querySelectorAll('.animactive');
                        allButtons.forEach(button => {
                            button.classList.remove('animactive');
                            // Change the last string in the svg from "1" to "w"
                            const img = button.querySelector('img');
                            img.src = img.src.replace('-1.svg', '-w.svg');
                            // Change the transform and padding-bottom styles
                            button.style.transform = `scale(${scale - 0.2})`;
                            img.style.transform = `scale(${scale - 0.5})`;
                            img.style.paddingBottom = '0px';
                            // Change the opacity of the span
                            const span = button.querySelector('span');
                            span.style.opacity = '0';
                        });
                    }
                }, 1000);
            }
            // If the section is not in view, clear the interval
            else if (intervalId) {
                clearInterval(intervalId);
            }
        });
    });

    // Start observing the section
    observer.observe(section);
}

// Remember to clear the interval when the page is unloaded
window.addEventListener('unload', () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});

export default startInterval;