const db = require('../db');


module.exports = {
    getAll() {
        return db.expenses.find().toArray();
    },
    // why would find() return undefined? 
   async getOneByName(name){
        try{
            const data = await db.expenses.findOne({
                name: { '$regex': `^${name}$`, '$options': 'i' } 
            });
            return data 

        }catch(err){
            res.send('Person not found')
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
async create(item){
    try{
        const addItem = await db.expenses.insertOne(item);
        return addItem; 
    } catch (err) {
        throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
    }},
async update(title, data) {
    try{
        const updatedItem = await db.expenses.findOneAndUpdate({
            title:{
                '$regex': `${title}$`,
                '$options': '1'
            }},
        {$set : data}
    )
     } catch(err){
         res.send('Update not valid')
     }
}

}