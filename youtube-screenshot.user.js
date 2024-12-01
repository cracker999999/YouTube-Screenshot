// ==UserScript==
// @name         YouTube Screenshot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Take screenshots on YouTube using Ctrl+Shift+S
// @author       Leen
// @match        https://www.youtube.com/*
// @match        https://www.youtube.com/watch?v=*
// @grant        none
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

    // Add keyboard shortcut listener
    document.addEventListener('keydown', handleKeyPress);
})();