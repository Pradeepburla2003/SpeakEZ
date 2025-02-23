const express = require('express');
const Router = express.Router();

const multer = require('multer');
const { uploadDocument,Getquestions,WETQuestion,EnglishScore,RandomText } = require('../controllers/AIController');

const upload = multer();
Router.post('/English-Score',EnglishScore);
Router.post('/upload', upload.single('file'), uploadDocument);
Router.post('/getquestions',Getquestions)
Router.get('/WET-random-question',WETQuestion)
Router.get('/Random-text',RandomText)

module.exports = Router;