const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
// const db = require('./db');

const data = require('./models/data')

const apple = [ {
    
}]

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

// db.connect().then(async() => {
//     console.log(await db.expenses.find())
// })

// require('./routes')(app);

app.get('/', (req, res) => {
    res.render('app/index.ejs', {data: data})
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));