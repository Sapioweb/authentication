"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var router_1 = require("./router");
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var app = express_1.default();
dotenv_1.config();
app.use(express_1.json());
mongoose_1.connect('mongodb+srv://sapiobeasley:2wsxzaq1@cluster0-4ppdq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () { return console.log('DB Connected'); })
    .catch(function () { return console.log('Error connecting DB'); });
app.use('', router_1.router);
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    return res.json({
        success: false,
        message: err.message,
        payload: req.body
    });
});
app.listen(3000, function () { return console.log('http://localhost:3000'); });
//# sourceMappingURL=index.js.map