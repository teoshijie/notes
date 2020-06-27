const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'owemoney';
const COLLECTIONS = {
    EXPENSES: 'expenses',
    USERS: 'users'
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.expenses = db.collection(COLLECTIONS.EXPENSES);
        this.users = db.collection(COLLECTIONS.USERS)
    },
    disconnect () {
        return client.close();
    },
};

