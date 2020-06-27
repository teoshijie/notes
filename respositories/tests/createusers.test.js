const {expect} = require('chai');
const usersRepo = require('../usersRepo')
const db= require('../../db');

describe('create()', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });

    it ('it should return insertedCount when a new object is inserted in db', async () => {
        const result = await usersRepo.create({
            'username': 'helloworld',
            'password': 'abc123',
            'createdAt': new Date(),
            'updatedAt': new Date()
        });
        expect(result.insertedCount).to.equal(1);

    })
});

