// ==UserScript==
// @name         YouTube Screenshot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Take screenshots on YouTube using Ctrl+Shift+S
// @author       Leen
// @match        https://www.youtube.com/*
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// @homepage     https://github.com/cracker999999/YouTube-Screenshot
// ==/UserScript==

(function() {
    'use strict';

    // Screenshot implementation
    function takeScreenshot() {
        const video = document.querySelector('video');
        if (!video) return;

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw current video frame to canvas
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Create download link
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        link.download = `youtube-screenshot-${timestamp}.png`;
        link.href = canvas.toDataURL('image/png');

        // Trigger download
        link.click();
    }

    // Listen for keyboard shortcuts
    function handleKeyPress(event) {
        // Check if Ctrl + Shift + S is pressed
        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 's') {
            event.preventDefault(); // Prevent default save page behavior
            takeScreenshot();
        }
    }

    // Initialize with delay to avoid conflicts with other userscripts
    function initWithDelay() {
        setTimeout(() => {
            // Add keyboard shortcut listener
            document.addEventListener('keydown', handleKeyPress);
            console.log('YouTube Screenshot: Keyboard shortcut initialized');
        }, 2000); // 2 seconds delay
    }

    // Start initialization after page load
    window.addEventListener('load', initWithDelay);
    // Handle YouTube's SPA navigation
    window.addEventListener('yt-navigate-finish', initWithDelay);
})();