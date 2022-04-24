var mongoose = require('mongoose');
import * as dotenv from "dotenv";
import * as path from 'path';

let envPath = path.join(path.join(__dirname,'../'),'/.env');
dotenv.config({ path: envPath });

const USERNAME = "" || process.env.USERNAME;
const PASSKEY = "" || process.env.PASSKEY;

const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSKEY}@cluster0.z3h3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(MONGO_URL);

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


export var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));

