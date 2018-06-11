import dva from 'dva';
import './index.css';
import { browserHistory } from 'dva/router'

// 1. Initialize
const app = dva({
	history: browserHistory
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/product').default);
console.log('------------------------------------------------------')
console.log("@model/login")
var _m = require('@model/login').default;
console.log('------------------------------')
console.log(_m)
app.model(_m);

// 4. Router
var _r = require('./router');
console.log('router------------------------')
console.log(_r.default)
app.router(_r.default);

// 5. Start
app.start('#root');
