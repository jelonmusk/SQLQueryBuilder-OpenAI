import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not defined in the environment variables');
    throw new Error('OPENAI_API_KEY is not defined in the environment variables');
}

const openai = new OpenAI({
    apiKey: openaiApiKey,
});

export default openai;
// This code imports the OpenAI library and dotenv for environment variable management.