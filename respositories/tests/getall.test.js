const {expect} = require('chai');
const moneyrepo = require('../moneyrepo')
const db= require('../../db');

describe('moneyrepo.getAll', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });

    it ('it should return an array', async () => {
        const expenses = await moneyrepo.getAll();
        expect (expenses).to.be.an('array')
    })
});

