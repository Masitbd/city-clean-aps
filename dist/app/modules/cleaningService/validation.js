"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleaningServiceValidations = void 0;
const zod_1 = require("zod");
const interface_1 = require("./interface");
const createService = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        price: zod_1.z.number({ required_error: 'Price is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        status: zod_1.z
            .enum(Object.values(interface_1.ENUM_CLEANING_SERVICE_STATUS))
            .optional(),
        category: zod_1.z.string({ required_error: 'Category is required' }),
    }),
});
const updateService = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        description: zod_1.z.string().optional(),
        status: zod_1.z
            .enum(Object.values(interface_1.ENUM_CLEANING_SERVICE_STATUS))
            .optional(),
        category: zod_1.z.string().optional(),
    }),
});
exports.CleaningServiceValidations = { createService, updateService };
