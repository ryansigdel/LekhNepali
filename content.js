// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "convert") {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            const convertedText = convertToUnicode(selectedText);
            sendResponse({ convertedText: convertedText });
        }
    }
});

// Function to convert text to Unicode
function convertToUnicode(text) {
    // Create a temporary form element to use the existing conversion logic
    const tempForm = document.createElement('form');
    tempForm.name = 'tempForm';
    const tempInput = document.createElement('textarea');
    tempInput.name = 'ascii';
    tempInput.value = text;
    tempForm.appendChild(tempInput);
    
    // Use the existing conversion function
    convert.call(tempForm);
    
    return tempInput.value;
} 