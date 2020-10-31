const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    exampleRouter = require('./routes/routes');

mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
    useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// initialize app
const app = express();

// enable request logging for development debugging
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.json());

// add a router
app.use('/api/example', exampleRouter);

// Serve any static files
app.use(express.static(path.join(__dirname, '../../client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});
 
// Use env port or default
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
