# YouTube Screenshot

A simple userscript that allows you to take screenshots of YouTube videos using keyboard shortcuts.

## Features

- Take screenshots of YouTube videos with a simple keyboard shortcut
- Automatically saves screenshots as PNG files
- Includes timestamp in filename
- Works on all YouTube video pages
- No UI elements added to keep the interface clean

## Installation

1. First, install a userscript manager extension in your browser:
   - For Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - For Firefox: [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - For Edge: [Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click [here](youtube-screenshot.user.js) to install the script
   - Or create a new script in your userscript manager and copy the content of `youtube-screenshot.user.js`

## Usage

1. Go to any YouTube video page
2. Press `Ctrl + Shift + S` when you want to take a screenshot
3. The screenshot will be automatically downloaded with the filename format: `youtube-screenshot-[timestamp].png`

## Technical Details

- Uses HTML5 Canvas to capture video frames
- No external dependencies
- Lightweight and performant
- Respects browser's security policies

## License

MIT License


## Contributing

Feel free to open issues or submit pull requests if you have any improvements or bug fixes. 