document.addEventListener('DOMContentLoaded', function() {
    const romanInput = document.getElementById('romanInput');
    const unicodeOutput = document.getElementById('unicodeOutput');
    const smartConverter = document.getElementById('smartConverter');
    const copyBtn = document.getElementById('copyBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Real-time conversion
    romanInput.addEventListener('input', updateConversion);
    smartConverter.addEventListener('change', updateConversion);
    copyBtn.addEventListener('click', copyToClipboard);
    clearBtn.addEventListener('click', clearInput);

    function updateConversion() {
        if (romanInput.value.length > 1500) {
            alert("Text is too large for live conversion. Please type less text.");
            return;
        }
        
        // Create a temporary form for conversion
        const tempForm = document.createElement('form');
        tempForm.name = 'tempForm';
        
        const asciiInput = document.createElement('textarea');
        asciiInput.name = 'ascii';
        asciiInput.value = romanInput.value;
        
        const unicodeOutput2 = document.createElement('textarea');
        unicodeOutput2.name = 'unicode';
        
        tempForm.appendChild(asciiInput);
        tempForm.appendChild(unicodeOutput2);
        
        // Call the conversion function
        translate(asciiInput, unicodeOutput2, false, smartConverter.checked);
        
        // Update the output
        unicodeOutput.textContent = unicodeOutput2.value;
    }

    function clearInput() {
        romanInput.value = '';
        unicodeOutput.textContent = '';
        romanInput.focus();
    }

    function copyToClipboard() {
        const text = unicodeOutput.textContent;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                const copySuccess = document.getElementById('copySuccess');
                copySuccess.classList.add('show');
                setTimeout(() => {
                    copySuccess.classList.remove('show');
                }, 2000);
            });
        }
    }

    // Initialize
    romanInput.focus();
}); 