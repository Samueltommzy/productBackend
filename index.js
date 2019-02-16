// import required dependencies
let express        = require('express');
let morgan         = require('morgan');
let methodOverride = require('method-override');
let bodyParser     = require('body-parser');
let mongoose       = require('mongoose');
let config         = require('./config/config.js');
let apiRoute       = require('./route/productRoute.js'); 

let app            = express();
let http           = require("http").createServer(app)
const port         = process.env.PORT


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/' , apiRoute);



http.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log("App running on port " + port)
    }
})

mongoose.Promise = global.Promise;
mongoose.connect(config.database).then((err)=>{
    if (err) {
        console.log(err);
    }
    console.log("successfully connected to " + config.databaseName);
});



