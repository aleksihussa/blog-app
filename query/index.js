const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const allPosts = {};

app.get('/posts', (req,res) => {
    res.send(allPosts);
})

app.post('/events', (req,res) => {
    const {type, data} = req.body;

    if(type == 'postCreated')
    {
        const {id, title } = data;

        allPosts[id] = {id, title, comments: []};
    }

    if(type == 'commentCreated')
    {
        const {id, content, postId, status } = data;
        const post = allPosts[postId];
        post.comments.push({id, content, status});
    }

    if(type === 'commentUpdated')
    {
        const {id, content, postId, status} = data;

        const post = allPosts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
          });

        comment.status = status;
        comment.content = content;
    }

    res.send({});
})

app.listen(4002, ()=>{
    console.log('listening on 4002');
})