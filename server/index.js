import  express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 3005;

// endpoint to test the server
app.get("/", (req, res) => {
    res.send("Server is running.Hello World from our API");
});

// app.listen is a method that starts the server and listens for incoming requests on the specified port
// The port is either taken from the environment variables or defaults to 3005
// The callback function is executed when the server starts successfully
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})  