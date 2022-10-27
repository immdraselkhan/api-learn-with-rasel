const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running :)');
});

const courses = require('./data/data.json');

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/popular', (req, res) => {
  const popular = courses.data.filter(course => course.rating == '4.0') || [];
  res.send(popular);
});

app.get('/courses/categories', (req, res) => {
  const categories = [...new Set(courses.data.map(course => course.category))]
  res.send(categories);
})

app.get('/coursesbycategory/:categoryName', (req, res) => {
  const id = req.params.categoryName;
  const coursesByCategory = courses.data.filter(course => course.category == id) || [];
  res.send(coursesByCategory)
});

app.get('/course/:courseSlug', (req, res) => {
  const slug = req.params.courseSlug;
  const course = courses.data.find(course => course.slug == slug) || {};
  res.send(course);
});

app.get('/checkout/:courseSlug', (req, res) => {
  const slug = req.params.courseSlug;
  const premiumAccess = courses.data.find(course => course.slug == slug) || {};
  res.send(premiumAccess);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});