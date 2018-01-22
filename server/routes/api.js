const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');

//serving online
//const API = 'https://jsonplaceholder.typicode.com';

//locally running json server 
const API = ' http://localhost:3000';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/comments', (req, res) => {
  // Get comments from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/comments`)
    .then(comments => {
      res.status(200).json(comments.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/customers', (req, res) => {
  // Get customers from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/customers`)
    .then(customers => {
      res.status(200).json(customers.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;