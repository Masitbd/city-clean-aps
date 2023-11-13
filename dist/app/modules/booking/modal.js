"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const interface_1 = require("./interface");
const bookingSchema = new mongoose_1.Schema({
    orderBy: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    service: { type: mongoose_1.Types.ObjectId, ref: 'CleaningService', required: true },
    serviceDate: { type: Date, required: true },
    status: {
        type: String,
        enum: Object.values(interface_1.ENUM_BOOKING_STATUS),
        default: interface_1.ENUM_BOOKING_STATUS.PENDING,
    },
}, { timestamps: true });
exports.Booking = (0, mongoose_1.model)('Booking', bookingSchema);
