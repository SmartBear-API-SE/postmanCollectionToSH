# Postman Collection to SwaggerHub

This project converts a Postman collection to an OpenAPI specification and uploads it to SwaggerHub.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/SmartBear-API-SE/postmanCollectionToSH.git
    cd postmanCollectionToSH
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Place your Postman collection JSON file in the `postmanCollection` directory.

2. Update the `OWNER`, `API_TO_CREATE_OR_UPDATE`, and `SWAGGERHUB_API_KEY` placeholders in `index.js` with your SwaggerHub details.

3. Run the script:
    ```sh
    node index.js
    ```


