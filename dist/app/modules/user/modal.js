"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("../../../enums/user");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNo: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    role: {
        type: String,
        // enum: Object.keys(ENUM_USER_ROLE),
        default: user_1.ENUM_USER_ROLE.CUSTOMER,
    },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('User', userSchema);
//const User = mongoose.models.User || model<IUser>('User', userSchema);
//export default User;
