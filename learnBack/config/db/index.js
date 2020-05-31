const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/learnfromhome", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log('Successfully connected');
    } else {
        console.log('Error connecting to database');
    }
});
