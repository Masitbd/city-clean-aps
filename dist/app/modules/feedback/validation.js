"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackValidations = void 0;
const zod_1 = require("zod");
const createFeedback = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string({ required_error: 'Service Id is required' }),
        feedback: zod_1.z.string({ required_error: 'Feedback is required' }),
    }),
});
exports.FeedbackValidations = { createFeedback };
