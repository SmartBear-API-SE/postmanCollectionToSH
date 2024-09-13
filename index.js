import postmanToOpenApi from 'postman-to-openapi';
import fetch from 'node-fetch';
import fs from 'fs';

const postmanCollection = './postmanColletion/collection.json'
const outputFile = './output/collection.yml'
const OWNER = 'SWAGGER_HUB_OWNER_NAME';
const SWAGGER_HUB_API_KEY = 'SWAGGER_HUB_API_KEY';
const API_NAME = 'API_NAME';

const convertPostmanToOpenApi = async () => {
    try {
        await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' });
        const yamlData = fs.readFileSync(outputFile, 'utf8');

        const response = await fetch(`https://api.swaggerhub.com/apis/${OWNER}/${API_NAME}`, {
            method: 'POST',
            headers: {
                'Authorization': `${SWAGGER_HUB_API_KEY}`,
                'Content-Type': 'application/yaml'
            },
            body: yamlData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            console.log('API documentation updated successfully');
        }

        
    } catch (err) {
        console.log(err);
    }
};

convertPostmanToOpenApi();
