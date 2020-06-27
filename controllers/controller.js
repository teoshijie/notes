const moneyRepo = require('../respositories/moneyRepo');
const validate = require('../validator/schema/formValidator');
const images = require('../img/image.json')
const usersRepo = require('../respositories/usersRepo');


module.exports = {
    new: (req, res) => {
        res.render('app/new.ejs', {images})
    },

    async getAll(req, res) {
        console.log(req.session.currentUser)
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
    async getOneByName(req, res) {
        try {
            const data = await moneyRepo.getOneByName(req.params.name);
            res.render('app/show.ejs', { data })
        } catch (err) {
            return res.send(err.message)
        }
    },
    async create(req, res) {
        try {
            console.log(req.body)
            // validate.form.validate(req.body)
            const item = {
                'title': req.body.title,
                'description': req.body.description,
                // 'user_id': req.sessions.user_id
            };

            const user = req.session.currentUser
            console.log(`item is ${item}`)
            console.log(`user is ${user.username}`)
            await usersRepo.update(user.username, item)
            res.redirect('/mynotes')
         
            // console.log(item)
            // await moneyRepo.create(item);
            // res.redirect('/')
        } catch (err) {
            return res.render('errors/404', { err });
        }
    },
    async update (req, res) {
        try {
            const item = {
                'title': req.body.title,
                'data': req.body.data
            };
            const user = req.session.currentUser

            await moneyRepo.edit(user.username, item);
            res.redirect('/mynotes')        
        } catch (err) {
            return res.render('errors/404', { err });
        }
    }

}
