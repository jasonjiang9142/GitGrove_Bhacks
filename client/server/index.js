import express from 'express';
import cors from "cors"


const app = express();
app.use(cors());
app.use(() => {
    console.log("We got a new request")
})

app.get('/', (req, res) => {
    res.send('Hi')
})


app.get('/info', (req, res) => {
    const { githubUsername } = req.query; // Retrieve query parameter 'githubUsername'
    console.log('Received GitHub username:', githubUsername);
    // Process the received data or send a response
    res.send('yes')
});


app.listen(3000, (req, res) => {
    console.log("listing")
})