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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleaningServiceService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const constant_1 = require("./constant");
const modal_1 = require("./modal");
const createCleaningService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const cleaningService = yield modal_1.CleaningService.create(payload);
    return cleaningService;
});
const getCleaningServices = (paginationOptions, filtersOptions) => __awaiter(void 0, void 0, void 0, function* () {
    // Pagination Options
    const { skip, page, limit, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    // Sort condition
    const sortCondition = {};
    sortCondition[sortBy] = sortOrder;
    // Filter Options
    const { searchTerm } = filtersOptions, filtersData = __rest(filtersOptions, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: constant_1.cleaningServiceSearchableFields.map(field => ({
                [field]: { $regex: searchTerm, $options: 'i' },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereCondition = Object.keys(andConditions).length
        ? { $and: andConditions }
        : {};
    const cleaningServices = yield modal_1.CleaningService.find(whereCondition)
        .populate('category')
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    const total = yield modal_1.CleaningService.find(whereCondition).count();
    const meta = { page, limit, total };
    return { meta, data: cleaningServices };
});
const getCleaningService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cleaningService = yield modal_1.CleaningService.findById(id).populate('category');
    return cleaningService;
});
const updateCleaningService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const cleaningService = yield modal_1.CleaningService.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return cleaningService;
});
const deleteCleaningService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cleaningService = yield modal_1.CleaningService.findByIdAndDelete(id);
    return cleaningService;
});
exports.CleaningServiceService = {
    createCleaningService,
    getCleaningServices,
    getCleaningService,
    updateCleaningService,
    deleteCleaningService,
};
