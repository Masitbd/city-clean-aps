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
exports.ReviewService = void 0;
const modal_1 = require("./modal");
const createAdmin = (authUserId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.user = authUserId;
    const review = yield modal_1.Review.create(payload);
    return review;
});
const getReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield modal_1.Review.find().populate('user');
    return reviews;
});
const getReviewsByServiceId = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield modal_1.Review.find({ service: serviceId }).populate('user');
    return reviews;
});
const getReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield modal_1.Review.findById(id).populate('user');
    return review;
});
const updateReview = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield modal_1.Review.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return review;
});
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield modal_1.Review.findByIdAndDelete(id);
    return review;
});
exports.ReviewService = {
    createAdmin,
    getReviews,
    getReviewsByServiceId,
    getReview,
    updateReview,
    deleteReview,
};
