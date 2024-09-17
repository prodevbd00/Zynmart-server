/*
    title : e-commerce website 
    description: conncet to the server by mongoose wrapper
    date : 09-Sep-2024
*/

// external import
import mongoose from 'mongoose';

//internal import
import app from './app.js';
import config from './config/index.js';

// connect to the data server
const dingDong = () => {
  mongoose
    .connect(config.mongo_connection_String, {})
    .then(
      () => console.log('🧬🩸 database connection successful 🩺💉'),
      app.listen(config.port, () => {
        console.log(`🦴 app listening port ${config.port}`);
      })
    )
    .catch((err) => console.log(err));
};

// call the dingDong funcion ();
dingDong();
