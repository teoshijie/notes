const {expect} = require('chai');
const moneyRepo = require('../moneyRepo')
const db= require('../../db');

describe('moneyRepo.getOneByName', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });

    it ('it should find an item called Beans', async () => {
        const data = await moneyRepo.getOneByName('Beans');
        console.log(data)
        expect(data.name).to.be.equal('Beans')
    })

});

