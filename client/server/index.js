import express from 'express';
import cors from "cors"

// Establish Tree class
class Tree {
    constructor(treeSize, treeUrl, forestSize) {
        this.tree_size = treeSize;
        this.tree_url = treeUrl;
        this.forest_size = forestSize;
    }
}



const app = express();
app.use(cors());

app.use((req, res, next) => {
    console.log("We got a new request");
    next(); // Added to forward the request to the next middleware
});


app.get('/', (req, res) => {
    res.send('Hi')
})

const forests = [];
app.get('/info', async (req, res) => {
    const { githubUsername } = req.query;
    console.log('Received GitHub username:', githubUsername);
    let username = githubUsername;

    try {
        const data = await fetch(`https://api.github.com/users/${username}/repos`)
        if (data.ok) {
            const repolist = await data.json();

            for (let i = 0; i < repolist.length; i++) {
                const repo = `${repolist[i].url}/contents`;

                try {
                    let tree = new Tree([], [], 0);
                    await recur(repo, tree);
                    let sumAll = function(tree) {
                        return tree.tree_size.reduce((accumulator, current) => accumulator + current, 0);
                    };
                    tree.forest_size = sumAll(tree);
                    forests.push(tree);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        else {
            console.log('Failed to fetch repo content');
        }
    } catch (e) {
        console.log(e);
    }

    res.send('yes');
});

async function recur(path, tree) {
    try {
        const response = await fetch(path);
        if (response.ok) {
            const contentList = await response.json();

            for (const content of contentList) {
                if (content.type === 'dir') {
                    await recur(content.url); // Recursive call for directories
                } else if (content.type === 'file') {
                    tree.tree_size.push(content.size); // Add file size to tree
                    tree.tree_url.push(content.html_url); // Add file url to tree
                }
            }
        } else {
            console.log(`Failed to fetch content for ${path}`);
        }
    } catch (error) {
        console.log(`Error in recur function: ${error}`);
    }
}

app.listen(3000, (req, res) => {
    console.log("listing")
})