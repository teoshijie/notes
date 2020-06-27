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

    
    app.get('/new', controller.new)
    app.get('/:name/edit', controller.getOneByName)
    app.post('/mynotes', controller.create)
    app.put('/:name/edit', controller.update)
    app.get('/mynotes', controller.getAll)

  
    
}