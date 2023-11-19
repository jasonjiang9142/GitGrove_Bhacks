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


app.get('/info', async (req, res) => {
    const { githubUsername } = req.query; // This should match the parameter sent from the client
    console.log('Received GitHub username:', githubUsername);
    let username = githubUsername;

    try {
        const data = await fetch(`https://api.github.com/users/${username}/repos`)
        if (data.ok) {
            const repolist = await data.json()

            // iterate through every repo
            for (let i = 0; i < repolist.length; i++) {
                const url = `${repolist[i].url}/contents`

                try {
                    const fetchUrl = await fetch(url)
                    if (fetchUrl.ok) {
                        const urlData = await fetchUrl.json()
                        console.log(urlData)
                    } else (
                        console.log('failed to fetch url content')
                    )

                } catch (error) {
                    console.log(error)
                }
            }
        }
        else {
            console.log('failed to fetch repo content')
        }

    } catch (e) {
        console.log(e)
    }

    // Process the received data or send a response
    res.send('yes');
});



app.listen(3000, (req, res) => {
    console.log("listing")
})