"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleaningServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(validation_1.CleaningServiceValidations.createService), controller_1.CleaningServiceController.createCleaningService);
router.get('/', controller_1.CleaningServiceController.getCleaningServices);
router.get('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
controller_1.CleaningServiceController.getCleaningService);
router.patch('/:id', (0, validateRequest_1.default)(validation_1.CleaningServiceValidations.updateService), controller_1.CleaningServiceController.updateCleaningService);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), controller_1.CleaningServiceController.deleteCleaningService);
exports.CleaningServiceRoutes = router;
