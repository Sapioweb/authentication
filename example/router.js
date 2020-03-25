"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../lib/controllers");
var router = express_1.Router();
exports.router = router;
router.post('/login', controllers_1.login);
router.post('/register', controllers_1.register);
//# sourceMappingURL=router.js.map