var assetsFolder = __dirname + '/public';
app.use(express.static(assetsFolder));

var object = {'message': "Hello json"}

app.get('/json', function(GET, res) {
    res.json(object)
})

var upperCaseObject = {'message' :  'HELLO JSON'};

app.get('/json', function(GET, res){
    if (process.env.MESSAGE_STYLE = uppercase) {
            res.json(upperCaseObject)
    } else {
        res.json(object);
    }
})

// sample query string ?first=firstname&last=lastname
app.get('/name', function(req, res){
    var {first: firstname, last: lastname} = req.query;
    res.json({name: `${firstname} ${lastname}`})
})

app.use(bodyParser.urlencoded({extended: false}));

app.post('/name', function(req, res){
    var {first: firstname, last: lastname} = req.query;
    res.json({name: `${firstname} ${lastname}`})
})