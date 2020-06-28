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
        const data = await moneyRepo.getAll({userid: '5ef5d3ea3dc7d72acc6ca197'});
        console.log(data)
        expect(data).to.be.an('array')
    })
}
)
//     it ('the first item should have the name Beans', async () => {
//         const data = await moneyRepo.getAll();
//         const beans= data.find(items => items.name === 'Beans' ) 
//         expect(beans.name).to.equal('Beans')
//     })
// });

