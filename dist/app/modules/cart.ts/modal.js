"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    service: { type: mongoose_1.Types.ObjectId, ref: 'CleaningService', required: true },
}, { timestamps: true });
exports.Cart = (0, mongoose_1.model)('Cart', cartSchema);
