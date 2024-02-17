import fetch from 'node-fetch';
import fs from 'fs';

const PROGRAM = {
    urlsFile: './urls.txt',

    async init() {
        const urls = await this.readUrls();
        this.checkUrls(urls);
    },

    async readUrls() {
        const content = await fs.promises.readFile(this.urlsFile, 'utf-8');

        return content.split('\n').map(url => url.trim());
    },

    async checkUrls(urls) {
        for (const url of urls) {
            await this.checkStatus(url);
        }
    },

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

PROGRAM.init();