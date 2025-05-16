import  express from 'express';
import cors from 'cors';
import generate from './generate.js';


const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

const port = process.env.PORT || 3005;


// endpoint to test the server
app.get("/", (req, res) => {
    res.send("Server is running.Hello World from our API");
});

//Routes to handle the SQL generation
app.post("/generate", async (req, res) => {
    const queryDescription = req.body.queryDescription;
    console.log("Received Query Description:", queryDescription);


    try{
        const sqlQuery = await generate(queryDescription);
        res.json({ response: sqlQuery });
        console.log("Generated SQL Query:", sqlQuery);
    }
    catch (error) {
        console.error("Error generating SQL query:", error.response?.data || error.message || error);
        res.status(500).json({ error: "An error occurred while generating the SQL query." });
        return;
    }
    // Call the generate function to get the SQL query

})

// app.listen is a method that starts the server and listens for incoming requests on the specified port
// The port is either taken from the environment variables or defaults to 3005
// The callback function is executed when the server starts successfully
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})  