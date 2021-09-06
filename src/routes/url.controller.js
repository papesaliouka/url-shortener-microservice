function httpGetShortUrl(req, res){

  res.end()
}

function httpPostShortUrl(req,res){
  let originalUrl = req.body.originalUrl;
  if(/^(ftp|http|https):\/\/[^ "]+$/.test(originalUrl)){
    res.json({originalUrl,short_url:1})
  }else{
    res.json({error: 'invalid url'})
  }
  res.end()
}

module.exports = {
  httpGetShortUrl,
  httpPostShortUrl
  };