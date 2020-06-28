const db = require('../db');
const { ObjectID } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    getAll(userid, res) {
        return db.expenses.find({ userid: userid }).toArray();
    },
    // why would find() return undefined? 
    async getOneByName(userid) {
        try {
            const o_id = new ObjectId(userid);
            const data = await db.expenses.findOne({
                _id: o_id
            });
            return data

        } catch (err) {
            throw new Error(`Error: ${err.message}`);
        }
    },
    // async getOneByName(name) {
    //     const foundItem = await db.expenses.findOne(
    //         {
    //             name: {
    //                 '$regex': `^${name}$`,
    //                 '$options': 'i'
    //             }
    //         }
    //     );
    //     if (!foundItem) throw new Error(`Item with name '${name}' does not exist`);
    //     return foundItem;
    // },
    async create(item) {
        try {
            const addItem = await db.expenses.insertOne(item);
            return addItem;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    // async update(userid, data) {
    //     try {
    //         const updatedItem = await db.expenses.findOneAndUpdate({
    //             _id: userid

    //         },
    //             { $set: data }
    //         )
    //         return updatedItem
    //     } catch (err) {
    //         throw new Error(`Error: ${err.message}`)        
    //     }
    // },

    async update(userid, data) {
        try {
            const { matchedCount } = await db.expenses.updateOne(
                {
                    _id: ObjectId(userid)
                },
                {
                    $set: data
                });
            if (!matchedCount) {
                throw new Error(`${title} doesn't exist`);
            } else {
                return true;
            }
        } catch (err) {
            throw new Error(`${err.message}`);
        }
    },


    async deleteById(userid) {
        try {

            const { modifiedCount } = await db.expenses.deleteOne({
                _id: ObjectId(userid)
            })
            if (!modifiedCount) throw new Error('delete fail');
        } catch (err) {
            throw new Error(`${err.message}`);
        }
    }
}



    // async destroy(userid){
    //         try {
    //             const o_id = new ObjectId(userid);
    //             await db.expenses.deleteOne({ _id: o_id })
    //         } catch (err) {
    //             res.send('Cannot Delete!')
    //         }},


    //     }