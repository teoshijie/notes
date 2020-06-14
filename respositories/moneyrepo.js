const db = require('../db');


module.export={
    getAll() {
        return db.expenses.find()
            .toArray();
    }
}