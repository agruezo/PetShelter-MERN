const mongoose = require('mongoose');
const dbName = "pet_shelter"

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log(`Established a connection to the ${dbName} database`))
    .catch( (err) => console.log("Something went wrong when connecting to the database", err));