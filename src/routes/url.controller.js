const mongodb = require('mongodb');
const mongoose = require('mongoose');
const mySecret = process.env['mongoUri']

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mySecret);
}

const UrlSchema = new mongoose.Schema({
  url: String
});

const url = mongoose.model(`url`, UrlSchema);

async function httpGetShortUrl(req, res){
  const short = await url.findById(req.params.id);
  res.redirect(short.url);
  res.end();
}

async function httpPostShortUrl(req,res){
  let originalUrl = req.body.url;
  if(/^(ftp|http|https):\/\/[^ "]+$/.test(originalUrl)){
    const url1 = new url({url: `${originalUrl}`})
    await url1.save();
    res.json({original_url:originalUrl,short_url:url1._id})
  }else{
    res.json({error: 'invalid url'})
  }
  res.end()
}

module.exports = {
  httpGetShortUrl,
  httpPostShortUrl
  };


  main();