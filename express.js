import { fileURLToPath } from "url";

app.get('/', function(GET,res){
    res.send('Hello Express');
});
var absolutePath = __dirname + '/views/index.html'

app.get('/', function(GET, res){
    res.sendFile(absolutePath);
});
var absoluteFolder = __dirname + '/public';
app.use(express.static(absoluteFolder));

var MESSAGE_STYLE=uppercase;

app.get('/json', function(GET, res){
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({ message: "HELLO JSON"}); } else {res.json({ message: 'Hello json'})}
})

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({time: req.time});
} 
);

app.get( '/:word/echo', function(req, res){
    res.json({echo: req.params.word})
})

app.get('/name', function(req, res){
    res.json({name: req.query.first + " " + req.query.last})
})