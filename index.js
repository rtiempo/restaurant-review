import app from './server.js';
// import mongoose from 'mongoose';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import RestaurantsDAO from './dao/restaurantsDAO.js';
import ReviewsDAO from './dao/reviewsDAO.js';

dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

MongoClient.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });

// mongoose
//   .connect(process.env.RESTAURANT_REVIEWS_DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then(async (client) => {
//     await RestaurantsDAO.injectDB(client);
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`);
//     });
//   });
