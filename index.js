const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');
const colors = require('colors');

app.use(cors());

//CONFIGURATION
app.set('port', process.env.PORT || 5000);

//MIDDLEWARE
// app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//ROUTES
app.use(require('./routes/email.routes'));
app.use(require('./routes/agency.routes'));
app.use(require('./routes/service.routes'));
app.use(require('./routes/mall.routes'));
app.use(require('./routes/ubdepartment.routes'));
app.use(require('./routes/ubprovince.routes'));
app.use(require('./routes/ubdistrict.routes'));
app.use(require('./routes/document.routes'));
app.use(require('./routes/request.routes'));
app.use(require('./routes/request_history.routes'));

//RUNNING SERVER
app.listen(app.get('port'), () => {
  console.log('Server running on port'.bgRed, app.get('port'));
});