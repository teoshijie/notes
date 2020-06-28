const moneyRepo = require('../respositories/moneyRepo');
const validate = require('../validator/schema/formValidator');
const images = require('../img/image.json')
const usersRepo = require('../respositories/usersRepo');
const { getOneByName } = require('../respositories/moneyRepo');


module.exports = {
    new: (req, res) => {
        res.render('app/new.ejs', { images })
    },

    async getAll(req, res) {
        console.log(req.session.currentUser)
        if (req.session.currentUser) {
            try {
                const userid = req.session.currentUser._id
                console.log(`userid is ${userid}`)
                const data = await moneyRepo.getAll(userid);
                console.log(data)
                res.render('app/index.ejs', { data, images })
            } catch (err) {
                return res.send(err.message)
            }
        } else {
            res.redirect('/')
        }

    },
    async edit(req, res) {
        try {
            const userid = req.params._id
            console.log(`userID in edit is ${userid}`)
            const data = await moneyRepo.getOneByName(req.params._id);
            console.log(`data is ${data.description}`)
            res.render('app/edit.ejs', { data })
        } catch (err) {
            return res.send(err.message)
        }
    },
    async getOneByName(req, res) {
        try {
            const userid = req.params._id
            console.log(`userID in getonebyname is ${userid}`)
            const data = await moneyRepo.getOneByName(req.params._id);
            console.log(`data is ${data.description}`)
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
                'userid': req.session.currentUser._id
            };
            // const user = req.session.currentUser._id
            // console.log(`user is ${user}`)
            // const user = req.session.currentUser
            console.log(`item is ${item}`)
            // console.log(`user is ${user.username}`)
            await moneyRepo.create(item)
            res.redirect('/mynotes')

            // console.log(item)
            // await moneyRepo.create(item);
            // res.redirect('/')
        } catch (err) {
            return res.render('errors/404', { err });
        }
    },

    async update(req, res) {
        try {
            const item = {
                'title': req.body.title,
                'description': req.body.description,
                'userid': req.session.currentUser._id
            }

            await moneyRepo.update(req.params._id, item);
            res.redirect('/mynotes')
        } catch (err) {
            return res.render('errors/404', { err });
        }
    },
    destroy(req, res) {
        moneyRepo.deleteById(req.params._id)
        res.redirect('/mynotes')
    }
}



