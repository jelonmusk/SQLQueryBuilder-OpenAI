import openaiClient from './api.js';

const generate = async (queryDescription) => {
  const turbo = async (queryDescription) => {
    const messages = [
      { role: "system", content: "You are a helpful assistant that converts natural language queries into SQL queries." },
      { role: "user", content: "Convert the following natural language description into a SQL Query:\n\nShow all elements in the table users." },
      { role: "assistant", content: "SELECT * FROM users;" },
      { role: "user", content: `Convert the following natural language description into a SQL Query:\n\n${queryDescription}` },
    ];

    const response = await openaiClient.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: messages,
      max_tokens: 100,
      temperature: 0.7,
    });

    return response.choices[0].message.content.replace(/```sql|```/g, '').trim();
};

  try {
    return await turbo(queryDescription);
  } catch (err) {
    console.error("OpenAI API error:", err.response?.data || err.message || err);
    throw err;
  }
};

export default generate;
