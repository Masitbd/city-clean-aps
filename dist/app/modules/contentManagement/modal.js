"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentManagement = void 0;
const mongoose_1 = require("mongoose");
const interface_1 = require("./interface");
const contentManagementSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    status: { type: String, default: interface_1.ENUM_CONTENT_VISIBILITY_STATUS.VISIBLE },
}, { timestamps: true });
exports.ContentManagement = (0, mongoose_1.model)('ContentManagement', contentManagementSchema);
