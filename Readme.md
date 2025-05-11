# Roman to Nepali Unicode Converter

A Chrome extension that converts Romanized Nepali text to Nepali Unicode in real-time.

## Algorithm Overview

The converter uses a sophisticated mapping system to transform Romanized Nepali text into Nepali Unicode. Here's how it works:

### 1. Character Mapping System

The core of the conversion process relies on a comprehensive mapping system that includes:

- **Base Characters**: Maps individual Roman letters to their Nepali Unicode equivalents
- **Combined Characters**: Handles complex combinations of letters to form Nepali characters
- **Special Cases**: Manages unique Nepali characters and their variations

### 2. Conversion Process

The conversion follows these steps:

1. **Input Processing**:
   - Takes Romanized Nepali text as input
   - Processes the text character by character
   - Maintains context for proper character combination

2. **Character Mapping**:
   - Uses a lookup table to map Roman characters to Nepali Unicode
   - Handles both single characters and character combinations
   - Supports all Nepali characters including:
     - Vowels (स्वर)
     - Consonants (व्यञ्जन)
     - Matras (मात्रा)
     - Special characters

3. **Context-Aware Conversion**:
   - Considers surrounding characters for proper conversion
   - Handles special cases like:
     - Half letters
     - Combined characters
     - Special Nepali characters

### 3. Special Features

The converter includes special handling for:

- **Half Letters**: Proper conversion of half letters (अर्धाक्षर)
- **Matras**: Correct placement of matras (मात्रा)
- **Combined Characters**: Accurate handling of combined characters
- **Special Characters**: Support for unique Nepali characters

### 4. Technical Implementation

The conversion is implemented using:

- A compressed mapping table for efficient storage
- Optimized lookup algorithms for fast conversion
- Real-time processing for immediate feedback
- Error handling for invalid inputs

## Usage

1. Type or paste Romanized Nepali text in the input field
2. The text will be automatically converted to Nepali Unicode
3. Use the copy button to copy the converted text
4. The conversion happens in real-time as you type

## Features

- Real-time conversion
- Copy to clipboard functionality
- Beautiful and intuitive UI
- Support for all Nepali characters
- Accurate conversion of complex combinations

## Installation

1. Download the extension files
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension directory
5. The extension is now installed and ready to use

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the conversion algorithm
- Enhancing the user interface

## License

This project is open source and available under the MIT License.

<h1>Nepali Unicode Converter</h1>
Nepali Unicode Converter is a simple web-based tool written in HTML and JavaScript that allows you to convert Romanized Nepali text to Nepali Unicode and vice versa. This tool is especially useful for those who need to work with Nepali text on digital platforms, such as websites, documents, or social media.

<h2>Features</h2>
Convert Romanized Nepali text to Nepali Unicode.
Convert Nepali Unicode text to Romanized Nepali.
Easy-to-use web interface.
Open-source and free to use.

<h2>Getting Started</h2>
<h3>Usage</h3>
1. Clone this repository to your local machine or include the HTML and JavaScript files in your project directory.
2. Open the index.html file in a web browser.
3. Use the provided input field and buttons to convert text:
4. Enter Romanized Nepali text in the "Romanized Nepali" input field and click the "Convert to Unicode" button to get the Nepali Unicode text.
5.Enter Nepali Unicode text in the "Nepali Unicode" input field and click the "Convert to Romanized" button to get the Romanized Nepali text.

<h2>Example</h2>
You can try the Nepali Unicode Converter by opening the index.html file in your web browser and entering text in the respective input fields.

<h2>License</h2>
<h3>MIT License</h3>

Copyright (c) [2023] [Bipin Budhathoki]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<h2>Contributing</h2>
If you would like to contribute to this project or report any issues, please feel free to fork the repository and submit pull requests or open issues.

<h2>Contact</h2>
For any questions or feedback, please feel free to contact us through the project's GitHub repository.

<b>Enjoy using the Nepali Unicode Converter! 🇳🇵<b>