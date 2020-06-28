const controller = require('./controllers/controller')
const usersController = require('./controllers/userscontroller')
const sessionsController = require('./controllers/sessionsController')
const appcontroller = require('./controllers/appcontroller')

module.exports = app => {
    app.get('/', appcontroller.index),
    app.get('/app', appcontroller.app),

    app.get('/sessions/new', sessionsController.newForm)
    app.post('/sessions', sessionsController.create)
    app.delete('/sessions', sessionsController.destroy)

    app.get('/users/new', usersController.newForm)
    app.get('/users/success', usersController.success)
    app.post('/users', usersController.create)  

    // app.post('/users', usersController.create)  

    // app.get('/mynotes', usersController.getAll)

    // app.delete('/mynotes/:index', controller.destroy)
    app.get('/mynotes', controller.getAll)
    app.get('/mynotes/:_id/edit', controller.edit)
    app.get('/mynotes/:_id/', controller.getOneByName)
    app.put('/mynotes/:_id/', controller.update)
    app.delete('/mynotes/:_id', controller.destroy);
    app.get('/new', controller.new)
    app.post('/mynotes', controller.create)

  
    
}