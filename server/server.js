const cors = require('cors');
const path = require('path'),
express = require('express'),
mongoose = require('mongoose'),
morgan = require('morgan'),
bodyParser = require('body-parser'),
multer = require('multer'),
exampleRouter = require('./routes/routes'),
authRouter = require('./routes/auth'),
eventRouter = require('./routes/event');

mongoose.connect(process.env.DB_URI || require('./config/config').db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Initialize app
const app = express();

app.use(cors());

// Enable request logging for development debugging
app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.json());

// Add a router TODO: the api shouldn't actually be 'api/example'
app.use('/api/example', exampleRouter);

// Router for authentication
app.use('/api/user', authRouter);

// Router for event CRUD operations
app.use('api/event', eventRouter);

// Serve any static files TODO: separate prod & dev environments
app.use(express.static(path.join(__dirname, '../../client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

// Use env port or default
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server now running on port ${port}!`));
