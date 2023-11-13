"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleaningService = void 0;
const mongoose_1 = require("mongoose");
const interface_1 = require("./interface");
const cleaningServiceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, default: interface_1.ENUM_CLEANING_SERVICE_STATUS.AVAILABLE },
    description: { type: String, required: true },
    category: { type: mongoose_1.Types.ObjectId, ref: 'Category' },
}, { timestamps: true });
exports.CleaningService = (0, mongoose_1.model)('CleaningService', cleaningServiceSchema);
