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
//not working not sure why. 
    it ('it should find an item called Beans and change name to Banana', async () => {
        const data = await moneyRepo.update('Beans', {
            'name': 'Peanut'
        });
        expect(data).to.equal(1)
        const peanut= await moneyRepot.getOneByName('Peanut')
        console.log(peanut)
        expect(peanut.name).to.be.equal('Peanut')
    })

});

