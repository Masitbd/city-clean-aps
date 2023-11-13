"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const user_1 = require("../../../enums/user");
const createAdmin = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        age: zod_1.z.number({ required_error: 'Age is required' }),
        contactNo: zod_1.z.string({ required_error: 'Contact No is required' }),
        email: zod_1.z.string({ required_error: 'Email is required' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
        role: zod_1.z
            .enum(Object.values(user_1.ENUM_USER_ROLE))
            .optional(),
        address: zod_1.z.string({ required_error: 'Address is required' }),
    }),
});
const updateUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        age: zod_1.z.number().optional(),
        contactNo: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z
            .enum(Object.values(user_1.ENUM_USER_ROLE))
            .optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.UserValidations = { createAdmin, updateUser };
