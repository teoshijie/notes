const {expect} = require('chai');
const moneyRepo = require('../moneyRepo')
const db= require('../../db');

describe('moneyRepo.getAll', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });

    it ('it should return an array', async () => {
        const data = await moneyRepo.getAll();
        expect(data).to.be.an('array')
    })

    it ('the first item should have the name Beans', async () => {
        const data = await moneyRepo.getAll();
        const beans= data.find(items => items.name === 'Beans' ) 
        expect(beans.name).to.equal('Beans')
    })
});

