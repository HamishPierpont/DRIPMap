const path = require('path'),
cors = require('cors'),
express = require('express'),
mongoose = require('mongoose'),
morgan = require('morgan'),
bodyParser = require('body-parser'),
authRouter = require('./routes/auth'),
eventRouter = require('./routes/event'),
os = require('os',)
multer = require('multer');
const { allowedNodeEnvironmentFlags } = require('process');

mongoose.connect(process.env.DB_URI /*|| require('./config/config').db.uri*/, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Initialize app
const app = express();

// Prevent weird 304 errors
app.set('etag', false);

// User cors to prevent resources from different origins being blocked
app.use(cors());

// Enable request logging for development debugging
app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.json());

// Router for authentication
app.use('/api/user', authRouter);

// Router for event CRUD operations
app.use('/api/event', eventRouter);

// Define storage path and filename for images on server
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
  
// Add this function as middleware to routes that store images
const upload = multer({storage: storage});

app.use(express.static(path.join(__dirname, 'public')));

if (process.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}
  
  //Store new image on the server
app.post('/upload', upload.single('image'), async (req, res) => {
  if (os.platform() !== 'win32') { //Not windows
    let imagePath = req.file.path.replace(/^public\//, '');
    res.send(imagePath);
    console.log(imagePath);
  }
  else { //Windows, unfortunately
    console.log("On windows...");
    let imagePath = req.file.path.replace(/^public\\/, '/');
    imagePath = imagePath.replace(/\\/g, '/');
    console.log("imagePath:", imagePath);
    res.send(imagePath);
  }
});

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Use env port or default
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server now running on port ${port}!`));
