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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const constant_1 = require("./constant");
const modal_1 = require("./modal");
const createAdmin = (authUserId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.orderBy = authUserId;
    const booking = yield modal_1.Booking.create(payload);
    return booking;
});
const getBookings = (paginationOptions, filtersOptions) => __awaiter(void 0, void 0, void 0, function* () {
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
            $or: constant_1.bookingSearchableFields.map(field => ({
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
    const bookings = yield modal_1.Booking.find(whereCondition)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit)
        .populate('orderBy service');
    const total = yield modal_1.Booking.find(whereCondition).count();
    const meta = { page, limit, total };
    return { meta, data: bookings };
});
const getBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield modal_1.Booking.findById(id);
    return booking;
});
const updateBookingStatus = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingExist = yield modal_1.Booking.findById(id);
    if (!bookingExist)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Booking data not found');
    const booking = yield modal_1.Booking.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return booking;
});
exports.BookingService = {
    createAdmin,
    getBookings,
    getBooking,
    updateBookingStatus,
};
