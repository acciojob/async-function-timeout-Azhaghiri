//your JS code here. If required.
// Waits for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve elements
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const submitButton = document.getElementById("btn");
    const outputDiv = document.getElementById("output");

    // Async function to handle delay and display text
    const displayTextWithDelay = async (text, delay) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(text);
            }, delay);
        });
    };

    // Event listener for button click
    submitButton.addEventListener("click", async (event) => {
        event.preventDefault(); // Prevent default form submission

		 outputDiv.textContent = "";
		
        // Get user input
        const text = textInput.value.trim();
        const delay = parseInt(delayInput.value, 10);

        // Validate input
        if (!text || isNaN(delay) || delay < 0) {
            outputDiv.textContent = "Please enter valid text and delay (non-negative number).";
            return;
        }

        // Clear output and show loading message
        outputDiv.textContent = "Processing...";

        // Display the text after the specified delay
        const result = await displayTextWithDelay(text, delay);
        outputDiv.textContent = result;
    });
});
