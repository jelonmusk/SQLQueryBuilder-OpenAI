import {Configuration , OpenAIApi} from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not defined in the environment variables');
    throw new Error('OPENAI_API_KEY is not defined in the environment variables');
    // This will stop the execution of the script
    process.exit(1);

}

const configuration = new Configuration({
    apiKey: openaiApiKey,
});
// below is the open ai api instance
// The OpenAIApi class is used to interact with the OpenAI API
const openai = new OpenAIApi(configuration);
// Function to generate SQL query using OpenAI API
