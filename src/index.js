const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const port = 3000;
const db = require('./config/db');
const { rootRouter } = require('./routes/index.route');

// *** Connect DB
db.connect();

// *** import template engine
const handlebars = require('express-handlebars');

//*** http logger
// app.use(morgan("combined"));

// *** Chỗ này là middle ware xử lý dữ liệu được submit từ form lên
app.use(express.urlencoded({ extended: false }));
// parse kiểu dữ liệu về json
app.use(express.json());

//***  template engine
app.engine(
  '.hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Mothod Override
app.use(methodOverride('_method'));
// *** Router
app.use('/', rootRouter);

// *** Public folder
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
