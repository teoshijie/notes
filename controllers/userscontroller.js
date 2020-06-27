const validate = require('../validator/schema/usersValidator');
const usersRepo = require('../respositories/usersRepo');
const { index } = require('./appcontroller');

module.exports = {
    async create(req, res) {
        try {
            console.log('hello', req.body)
            console.log('cake', validate)
            validate.users.validate(req.body)
            console.log('hello-2', req.body)

            await usersRepo.create(req.body)
            res.redirect('/users/success')
        } catch (err) {
            res.send(err)// set up 404 error later 
        }
    },
    newForm(req, res) {
        res.render('users/new');
    },
    success(req, res) {
        res.render('users/success')
    },
    async getAll(req, res) {
        if(req.session.currentUser){
            try{
                const user = req.session.currentUser
                console.log(user.username)
                const data = await usersRepo.get(user.username);
                console.log(data)
                res.render('app/index.ejs', { data, images })
            }catch(err){
                return res.send(err.message)
            }
        } else {
            res.redirect('/')
        }
       
    },
    // async delete(req, res) {
    //     try {
    //         const user = req.session.currentUser
    //         console.log(user.username)
    //         const data = await usersRepo.find(user.username);
    //         usersRepo.delete(data[req.params.index].title)
         
    //         res.render('app/index.ejs', { data, images })
    //     }
    // }
};
