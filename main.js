import fetch from 'node-fetch';
import fs from 'fs';

/**
 * Represents a program that checks the status of URLs.
 * @namespace PROGRAM
 */
const PROGRAM = {
    urlsFile: './urls.txt',

    
    /**
     * Initializes the application by reading URLs and checking them.
     * @returns {Promise<void>} A promise that resolves when the initialization is complete.
     */
    async init() {
        const urls = await this.readUrls();
        this.checkUrls(urls);
    },

    /**
     * Reads the URLs from a file.
     * @returns {Promise<string[]>} A promise that resolves with the URLs.
     * @throws {Error} An error if the file cannot be read.
     */
    async readUrls() {
        const content = await fs.promises.readFile(this.urlsFile, 'utf-8');

        return content.split('\n').map(url => url.trim());
    },

    /**
     * Checks the status of the URLs.
     * @param {string[]} urls The URLs to check.
     * @returns {Promise<void>} A promise that resolves when all URLs have been checked.
     * @throws {Error} An error if a URL cannot be checked.
     */
    async checkUrls(urls) {
        for (const url of urls) {
            await this.checkStatus(url);
        }
    },

    /**
     * Checks the status of a URL.
     * @param {string} url The URL to check.
     * @returns {Promise<void>} A promise that resolves when the URL has been checked.
     * @throws {Error} An error if the URL cannot be checked.
     */
    async checkStatus(url) {
        try {
            const response = await fetch(url);

            if (response.status !== 200) {
                console.log(`${url} has a status of ${response.status}`);
            }

            console.log(`${url} is OK`);

        } catch (error) {
            console.log('There was an error:', error);
        }
    }
}

// Start the program
PROGRAM.init();