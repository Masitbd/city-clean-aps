"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), (0, validateRequest_1.default)(validation_1.CartValidations.createCart), controller_1.CartController.createAdmin);
router.get('/', controller_1.CartController.getCarts);
router.get('/service/:id', controller_1.CartController.getCartsByServiceId);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), controller_1.CartController.deleteCart);
exports.CartRoutes = router;
