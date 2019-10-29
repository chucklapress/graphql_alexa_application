# graphql alexa app demo

GraphQL demo application for Amazon Alexa

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install required packages.

```bash
npm init
```

## Usage

```node
node index.js
```
## API and Alexa application
Each directory is seperate the GraphQL in api directory should be run following Usage \n
It will create a API endpoint reachable at localhost:4000, to connect the endpoint to the alexa application\n
You will need to utilize [ngrok](https://ngrok.com/) \n
```bash
./ngrok http 4000
```
follow the terminal prompts and choose the Forwarding address for https: endpoint \n
to enter in line 2 of index.js for alexa app "const GRAPHQL_ENDPOINT = 'https:// "

## Setup for Alexa application
Simply follow the instructions outlined https://developer.amazon.com/docs/alexa-skills-kit-sdk-for-nodejs/develop-your-first-skill.html#creating-the-skill-package \n
onward for configurations for developer portal, and packaging your lambda
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
