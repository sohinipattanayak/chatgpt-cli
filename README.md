# OpenAI ChatGPT CLI Tool

This is a powerful yet simple Node.js command-line interface tool designed to interact with the OpenAI API, enabling users to generate responses from OpenAI's chatGPT by inputting their own messages.

## Description

This tool allows you to directly interact with OpenAI's chatGPT (GPT-3.5-turbo). It is capable of sending a POST request to the API with a message specified by the user and fetching the generated response. The tool is built in Node.js and requires the OpenAI API key for authorization.

## Prerequisites

- Node.js
- npm
- OpenAI API Key

## Setup

### Clone the Repository

```
git clone https://github.com/sohinipattanayak/chatgpt-cli.git
cd openai-cli-tool
```

#### Install the Dependencies

```
npm install
```

#### Environment Variables

Create a `.env` file in the root directory of the project and add the following:

```
OPENAI_API_KEY=your_openai_api_key
```

## Usage

To use the CLI tool, run the following command and then follow the prompts:

```
npm start
```

## Functionality

This tool accepts user input as a message, sends a POST request to the OpenAI API, and retrieves the response. The message is sent in the request body and the API key in the headers for authorization. The OpenAI API responds with a JSON object containing the generated response. This response is then parsed and printed to the console.

## Contribution

Contributions, issues, and feature requests are welcome.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Sohini - sohinipattanayak.it@example.com
Twitter - @TheSohini

Project Link: https://github.com/sohinipattanayak/chatgpt-cli
