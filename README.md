# Test URLs

This Node.js program checks the status of URLs listed in a text file, logging the status of each URL to the console. It's designed to quickly verify if URLs are reachable and responding with a status code of 200 (OK).

## Features

- **URL Reading**: Reads a list of URLs from a text file.
- **Status Checking**: Checks the status of each URL asynchronously.
- **Error Handling**: Logs errors for unreachable URLs or those that respond with a status code other than 200.

## Requirements

- Node.js (Version specified in `package.json` or later)
- `node-fetch` package for making HTTP requests

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Usage

1. Add your list of URLs to the `urls.txt` file, placing each URL on a new line.
2. Run the program using the command `npm start`.
3. Check the terminal for the status of each URL. URLs that are reachable and respond with a 200 status will log as "OK", while others will display their HTTP status code.

## Configuration

- **URLs File**: By default, the program reads URLs from `./urls.txt`. You can change this file path in the `main.js` file, modifying the `urlsFile` property of the `PROGRAM` object.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## Author

[Linus Rudbeck](https://github.com/linus-rudbeck/)
