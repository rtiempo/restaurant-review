import app from './server.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import RestaurantsDAO from './dao/restaurantsDAO.js';

dotenv.config();

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.RESTAURANT_REVIEWS_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
