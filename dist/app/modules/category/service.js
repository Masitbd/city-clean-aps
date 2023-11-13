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
exports.CategoryService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const constant_1 = require("./constant");
const modal_1 = require("./modal");
const createAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield modal_1.Category.create(payload);
    return category;
});
const getCategorys = (paginationOptions, filtersOptions) => __awaiter(void 0, void 0, void 0, function* () {
    // Pagination Options
    const { skip, page, limit, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    // Sort condition
    const sortCondition = {};
    sortCondition[sortBy] = sortOrder;
    // Filter Options
    const { searchTerm } = filtersOptions;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: constant_1.categorySearchableFields.map(field => ({
                [field]: { $regex: searchTerm, $options: 'i' },
            })),
        });
    }
    const whereCondition = Object.keys(andConditions).length
        ? { $and: andConditions }
        : {};
    const categorys = yield modal_1.Category.find(whereCondition)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    const total = yield modal_1.Category.find(whereCondition).count();
    const meta = { page, limit, total };
    return { meta, data: categorys };
});
const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield modal_1.Category.findById(id);
    return category;
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield modal_1.Category.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return category;
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield modal_1.Category.findByIdAndDelete(id);
    return category;
});
exports.CategoryService = {
    createAdmin,
    getCategorys,
    getCategory,
    updateCategory,
    deleteCategory,
};
