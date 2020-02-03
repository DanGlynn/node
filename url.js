var shorturl = require('shorturl');
var projectURL = 'https://url-lard.glitch.me?action=shorturl&format=simple&url=%@';
shorturl('https://chicagooboelessons.com/', projectURL,  function(muffins) {
    console.log(muffins)
});

// https://scalegrid.io/blog/how-to-build-a-url-shortener-with-node-js-and-mongodb/ - pre-save and url shortener 
// tutorial on creating two apis https://codeburst.io/creating-custom-url-shortener-with-nodejs-de10bbbb89c7

app.post('https://url-lard.glitch.me/shorturl/api/new', function(req, res, next) {
    console.log(req.body.url);
    var urlData = req.body.url;
    URL.findOne({url: urlData}, function(err, doc) {
        if(doc) {
            console.log('entry found in db');
            res.send({
                url: urlData,
                hash: btoa(doc._id),
                status: 200,
                statusTxt: 'OK'
            });
        } else {
            console.log('entry NOT found in db, saving new');
            var url = new URL({
                url: urlData
            });
            url.save(function(err) {
                if(err) return console.error(err);
                res.send({
                    url: urlData,
                    hash: btoa(url._id),
                    status: 200,
                    statusTxt: 'OK'
                });
            });
        }
    });
});

app.get('/:hash', function(req, res) {
    var baseid = req.params.hash;
    var id = atob(baseid);
    URL.findOne({ _id: id }, function(err, doc) {
        if(doc) {
            res.redirect(doc.url);
        } else {
            res.redirect('/');
        }
    });
});