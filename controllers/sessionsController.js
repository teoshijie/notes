const userRepo = require('../respositories/usersRepo')
const bcrypt = require('bcrypt');

module.exports= {
    newForm(req,res) {
        res.render('sessions/new');
    },
    async create(req,res){
        try{
            const user = await userRepo.find(req.body.username);
            console.log(user)
            if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.currentUser = user;
                return res.redirect('/mynotes');
            }else{
                throw new Error();
            }
        } catch(err) {
            return res.send('<a href="/"> Wrong password</a>')
        }
       
    },
    destroy (req, res) {
      return req.session.destroy(() => {
            res.redirect('/');

        })
    }
}