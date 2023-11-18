import express from 'express';
import cors from "cors"


const app = express();
app.use(cors());
app.use((req, res, next) => {
    console.log("We got a new request");
    next(); // Added to forward the request to the next middleware
});


app.get('/', (req, res) => {
    res.send('Hi')
})


app.get('/info', async(req, res) => {
    const { githubUsername } = req.query; // This should match the parameter sent from the client
    console.log('Received GitHub username:', githubUsername);
    let username = githubUsername;
    
    try{ 
        const data = await fetch(`https://api.github.com/users/${username}/repos`)
        if (data.ok) { 

            const myresponse = await data.json()
            for (let i = 0; i < myresponse.length; i++) {
                console.log(myresponse[i].html_url)
            }

        }
        else{ 
            console.log('error') 
        }

    }catch(e) { 
        console.log(e) 
    }

    // Process the received data or send a response
    res.send('yes');
});



app.listen(3000, (req, res) => {
    console.log("listing")
})