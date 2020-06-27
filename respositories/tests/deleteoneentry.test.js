const {expect} = require('chai');
const usersRepo = require('../usersRepo')
const db= require('../../db');

describe('delete()', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });

    it ('it should find superman and push object with title and description ', async () => {
        const data = await usersRepo.delete('apple1',
        {title: 'friday', description: 'went out'});
            console.log(data)
            expect(data.title[0]).to.be.equal(null)

    })
});

