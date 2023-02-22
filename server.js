const app = require('./app');
const { PORT } =process.env;
const API_PORT = PORT || 4000;

app.locals.title="Test App";

app.listen(API_PORT, function(req,res){
 console.log(`Express server (${app.locals.title}) is started running on the Port %d in the %s mode `, this.address().port, app.settings.env)
});