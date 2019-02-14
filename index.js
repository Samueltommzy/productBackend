// import required dependencies
let express        = require('express');
let morgan         = require('morgan');
let methodOverride = require('method-override');
let bodyParser     = require('body-parser');
let mongoose       = require('mongoose');
let config         = require('./config/config.js')

let app            = express();
let http           = require("http").createServer(app)
let port           = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect(config.database).then((err)=>{
    if (err) {
        console.log(err);
    }
    console.log("successfully connected to " + config.databaseName);
});

http.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log("App running on port " + port)
    }
})

