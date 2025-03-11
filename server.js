const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

const posts = [
  {
    id: 1,
    title: 'Sample Blog Post 1',
    description: 'This is a sample blog post.',
    tag: 'Technology',
    coverImage: 'https://example.com/cover1.jpg',
  },
  {
    id: 2,
    title: 'Sample Blog Post 2',
    description: 'Another sample blog post.',
    tag: 'Travel',
    coverImage: 'https://example.com/cover2.jpg',
  },
  // Add more sample posts as needed
];

app.use(cors());

app.get('/api/posts', (req, res) => {
  res.json({ data: posts });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
