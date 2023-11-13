"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidations = void 0;
const zod_1 = require("zod");
const interface_1 = require("./interface");
const createBooking = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string({ required_error: 'Service is required' }),
        serviceDate: zod_1.z.string({ required_error: 'Service Date is required' }),
    }),
});
const updateBookingStatus = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(Object.values(interface_1.ENUM_BOOKING_STATUS), { required_error: 'Service Date is required' }),
    }),
});
exports.BookingValidations = { createBooking, updateBookingStatus };
