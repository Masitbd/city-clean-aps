"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidations = void 0;
const zod_1 = require("zod");
const createReview = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string({ required_error: 'Service Id is required' }),
        rating: zod_1.z.number({ required_error: 'Rating Id is required' }),
        review: zod_1.z.string({ required_error: 'Review is required' }),
    }),
});
const updateReview = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        review: zod_1.z.string().optional(),
    }),
});
exports.ReviewValidations = { createReview, updateReview };
