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
var app = express_1.default();
app.use(express_1.json());
app.use('', router_1.router);
app.listen(3000, function () { return console.log('http://localhost:3000'); });
//# sourceMappingURL=index.js.map