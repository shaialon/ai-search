# AI Search - Booking.com Example

AI Search is a CLI-based application leveraging OpenAI's API to perform intelligent search operations on the Booking.com travel site. 

It's Designed with Node.js, and allows users to query structured information in natural language

## Features

- Interactive CLI for querying and generating content using OpenAI's API.
- Stylish terminal output with `chalk` and clickable links with `terminal-link`.
- Persistent local storage for caching results and queries with `node-persist`.

## Prerequisites

- Node.js version >= 20.10.0
- You can set up [Node Version Manager](https://github.com/nvm-sh/nvm), and run `nvm use` to have it choose the correct node version.

## Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd ai-search
npm install
```

## Usage
To start the application, run:

```bash
npm start
```

### To run tests:

```bash
npm test
```

### Configuration
Create a `.env` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```


### Contributions
Contributions are welcome! 
Please open an issue to discuss your idea or submit a pull request.

Especially appreciated:

- [ ] Adding support for Google Gemini (via Langchain.js)
- [ ] Adding a RAG component

## Disclaimer
This project is not affiliated with Booking.com, and is meant for demonstration purposes only.

### License
This project is licensed under the ISC License. See the LICENSE file for details.