import express from 'express';

const app = express();

app.use(() => {
    console.log("We got a new request")
})

app.listen(3000, (req, res) => {
    console.log("listing")
})