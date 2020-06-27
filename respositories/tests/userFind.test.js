const {expect} = require('chai');
const usersRepo = require('../usersRepo')
const db= require('../../db');

describe('userRepo.find', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });
//not working not sure why. 
    it ('it should find user called cup cakes', async () => {
        const data = await usersRepo.find('superman');
        console.log(data.entries);
        expect(data.entries[2].title).to.equal('my day')
    });

    // it ('it should throw an error if the user is not in db collection'), async () => {
    //     try{
    //         const data = await usersRepo.find('shijie');
    //     }catch(err){
    //         expect(err).to.be.ok;
    //     }
    // }

});
