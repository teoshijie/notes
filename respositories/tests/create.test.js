const {expect} = require('chai');
const moneyRepo = require('../moneyRepo')
const db= require('../../db');

describe('create()', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });

    it ('it should return insertedCount when a new object is inserted in db', async () => {
        const data = await moneyRepo.create({
            'title': 'shijie',
            'data': 'helloworld',
            'createdAt': new Date(),
            'updatedAt': new Date()
        });
     expect(data.insertedCount).to.equal(1);
    //  const item = await moneyRepo.getOneByName('shijie');
    //  console.log(item)
    //  expect(item.name).to.equal('shijie');
    })
});

