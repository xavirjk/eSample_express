const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  family: 4,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
};

exports.establishConnection = (mongo_uri) =>
  new Promise((resolve, reject) => {
    mongoose.connect(mongo_uri, options).then(
      (fulfilled) => {
        resolve('Connected to Atlas!');
      },
      (err) => {
        reject('Failed connection to Atlas!');
      }
    );
  });
