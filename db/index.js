const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'owemoney';
const COLLECTIONS = {
    EXPENSES: 'expenses',
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.owemoney = db.collection(COLLECTIONS.EXPENSES);
    },
    disconnect () {
        return client.close();
    },
};

