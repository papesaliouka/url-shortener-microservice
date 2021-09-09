const express = require('express');
const {httpGetShortUrl, httpPostShortUrl} = require('./url.controller');

const urlRouter = express.Router();

urlRouter.get('/:id',httpGetShortUrl);
urlRouter.post('/',httpPostShortUrl);

module.exports= urlRouter;