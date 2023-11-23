import express from 'express';
import cors from "cors"

// Establish Tree class
class Tree {
    constructor() {
        this.name = 'Name'
        this.treepairs = {}
        this.forest_size = 0;
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

const forests = {}
app.get('/info', async (req, res) => {

    const { githubUsername } = req.query;
    console.log('Received GitHub username:', githubUsername);
    let username = githubUsername;
    try {
        const data = await fetch(`https://api.github.com/users/${username}/repos`)
        if (data.ok) {
            const repolist = await data.json();

            for (let i = 0; i < 3; i++) {
                console.log('fetching')
                const repo = `${repolist[i].url}/contents`;

                try {
                    let tree = new Tree();
                    tree.name = repolist[i].name;
                    await recur(repo, tree);
                    tree.forest_size = Object.values(tree.treepairs).reduce((accumulator, currentKey) => {
                        return accumulator + Number(currentKey);
                    }, 0);
                    forests[repolist[i].name] = tree;


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
    // ret index 0 is the image, index 1 is the size, index 2 is the name of the repositories, index 3 is the tree url
    let ret = [[], [], [], []];

    // Iterate over key-value pairs in the forests dictionary
    for (const [key, size] of Object.entries(forests)) {
        // adding the name
        ret[2].push(size.name);
        if (size.forest_size >= 200000) {
            ret[0].push('../../assets/s_forest.png');
        } else if (size.forest_size >= 500000 && size.forest_size < 1000000) {
            ret[0].push('../../assets/m_forest.png');
        } else {
            ret[0].push('../../assets/l_forest.png');
        }

        let i = 0;
        for (const [tree_key, tree_value] of Object.entries(size.treepairs)) {
            if (i === 3) { break; }
            i++;
            ret[1].push(tree_value);
            ret[3].push(tree_key);
        }
    }

    res.send(ret);

});

async function recur(path, tree) {
    try {
        const response = await fetch(path);
        if (response.ok) {
            const contentList = await response.json();

            for (const content of contentList) {
                if (content.type === 'dir') {
                    await recur(content.url, tree); // Now passing 'tree' to the recursive call
                } else if (content.type === 'file' && content.size != undefined && content.html_url != undefined) {
                    tree.treepairs[content.html_url] = content.size;
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