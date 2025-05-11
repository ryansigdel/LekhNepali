# LekhNepali

A Chrome extension that converts Romanized Nepali text to Nepali Unicode in real-time.

## Algorithm Overview

The conversion algorithm is inspired by existing Nepali Unicode conversion projects. The core conversion process works as follows:

### 1. Character Mapping System

The converter uses a sophisticated mapping system that includes:
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

## Features

- Real-time conversion from Romanized Nepali to Nepali Unicode
- Easy-to-use popup interface
- Copy to clipboard functionality
- Support for all Nepali characters
- Works on any website

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
5. The extension is now installed and ready to use

## Usage

1. Click the extension icon in your Chrome toolbar
2. Type or paste Romanized Nepali text in the input field
3. The text will be automatically converted to Nepali Unicode
4. Use the copy button to copy the converted text
5. Paste the text wherever you need it

## Development

This extension is built using:
- HTML
- CSS
- JavaScript
- Chrome Extension Manifest V3

## Credits

The conversion algorithm in this project is inspired by existing Nepali Unicode conversion projects. We extend our gratitude to the Nepali developer community for their contributions to Nepali language technology.
