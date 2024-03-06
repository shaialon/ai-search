# AI Search - Booking.com Example

AI Search is a server application leveraging OpenAI's API to perform intelligent search operations on the Booking.com travel site. 

It's Designed with Node.js, and allows users to query structured information in natural language

[The code is explained in this Webinar in detail.](https://www.meetup.com/meetup-group-ddasngqy/events/299458281/)

## Features

- Interactive `fastify` server for creating Booking.com urls, based on the users' natural language input.
- Stylish terminal output with `chalk` and clickable links with `terminal-link`.
- Persistent local storage for caching results and queries with `node-persist`.

## Prerequisites

- Node.js version >= 20.10.0
- You can set up [Node Version Manager](https://github.com/nvm-sh/nvm) for it.

## Installation

### Clone the repository

```bash
git clone https://github.com/shaialon/ai-search.git
cd ai-search
```

### install the dependencies:

run `nvm use` to have it choose the correct node version.
run `npm install` to install the various dependencies.


### Configuration
Create a `.env` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```


## Usage
To start the application server, run:

```bash
npm start
```

You can then make requests like so (via POSTMAN or just a browser):
```
GET http://localhost:8010/ai_search?search={{url_encoded_query_here}}
```


### To run tests:

```bash
npm test
```


## Contributions
Contributions are welcome! 
Please open an issue to discuss your idea or submit a pull request.

Especially appreciated:
- [ ] Support Booking flexible dates
- [ ] Adding support for Google Gemini (via Langchain.js)
- [ ] Adding a RAG component
- [ ] Get data dynamically from Booking


## Disclaimer
This project is not affiliated with Booking.com, and is meant for demonstration purposes only.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
