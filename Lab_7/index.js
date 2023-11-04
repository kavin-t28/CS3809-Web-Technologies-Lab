const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can change this to any port you prefer

app.set('view engine', 'ejs'); // Use EJS as the template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

const posts = []; // Simulated database for storing blog posts

// Home page route
app.get('/', (req, res) => {
  res.render('home', { posts });
});

// New post form route
app.get('/newpost', (req, res) => {
  res.render('newpost');
});

// Create a new post route
app.post('/create', (req, res) => {
  const { title, content } = req.body;
  const newPost = { title, content };
  posts.push(newPost);
  res.redirect('/');
});

// JSON API endpoint to fetch all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
