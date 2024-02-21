require('dotenv').config();

//requests schemas
require('./src/utils/schemas');

//import packages
const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

//middlewares
const jwtMiddleware = require('./src/middlewares/token.middleware');
const authorizationMiddleware = require('./src/middlewares/authorization.middleware');
const requestMiddleware = require('./src/middlewares/request.middleware');
//routes
const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");
const productsRoutes = require("./src/routes/product.routes");

const app = express();
const upload = multer();

const PORT = process.env.APP_PORT;

//parse application/json
app.use(express.json());

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//parse application/multipart-form
app.use(upload.any());

//log HTTPs
app.use(morgan('common'));

app.use(cookieParser())

app.use(requestMiddleware)
app.use(['/users', '/products'], jwtMiddleware, authorizationMiddleware)

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productsRoutes);

app.listen(PORT, () => console.log(`server running: http://localhost:${PORT}`));