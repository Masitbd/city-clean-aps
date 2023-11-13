"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidations = void 0;
const zod_1 = require("zod");
const createCart = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string({ required_error: 'Service Id is required' }),
    }),
});
const updateCart = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string().optional(),
    }),
});
exports.CartValidations = { createCart, updateCart };
