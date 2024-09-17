/*
    title : e-commerce website 
    description: express app
    date : 09-Sep-2024
*/

// external import
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// express app ;
const app = express();
dotenv.config();

// swagger doc
const swaggerDoc = YAML.load('./swagger.yaml');

//setup swaggerGUI
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse cookies
app.use(cookieParser());

// routing setup
app.get('/', (req, res) => {
  res.send('server is running');
});

export default app;
