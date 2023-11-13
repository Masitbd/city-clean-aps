"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentManagementService = void 0;
const constant_1 = require("./constant");
const modal_1 = require("./modal");
const createContentManagement = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const contentManagement = yield modal_1.ContentManagement.create(payload);
    return contentManagement;
});
const getContentManagements = (filtersOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const andConditions = [];
    // Filter Options
    const { searchTerm } = filtersOptions;
    if (searchTerm) {
        andConditions.push({
            $or: constant_1.contentSearchableFields.map(field => ({
                [field]: { $regex: searchTerm, $options: 'i' },
            })),
        });
    }
    const whereCondition = Object.keys(andConditions).length
        ? { $and: andConditions }
        : {};
    const contentManagement = yield modal_1.ContentManagement.find(whereCondition);
    return contentManagement;
});
const updateContentManagement = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const contentManagement = yield modal_1.ContentManagement.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return contentManagement;
});
const deleteContentManagement = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contentManagement = yield modal_1.ContentManagement.findByIdAndDelete(id);
    return contentManagement;
});
exports.ContentManagementService = {
    createContentManagement,
    getContentManagements,
    updateContentManagement,
    deleteContentManagement,
};
