import { ObjectId } from 'mongoose';
import { ICart, ICartSearch } from './interface';
import { Cart } from './modal';

const createAdmin = async (authUserId: ObjectId, payload: ICart) => {
  payload.user = authUserId;
  const cart = await Cart.create(payload);
  return cart;
};

const getCarts = async (filtersOptions: ICartSearch) => {
  const andConditions = [];

  if (Object.keys(filtersOptions).length) {
    andConditions.push({
      $and: Object.entries(filtersOptions).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereCondition = Object.keys(andConditions).length
    ? { $and: andConditions }
    : {};

  const carts = await Cart.find(whereCondition).populate('user service');

  return carts;
};

const getCartsByServiceId = async (serviceId: string) => {
  const carts = await Cart.find({ service: serviceId }).populate(
    'user service'
  );

  return carts;
};

const deleteCart = async (id: string) => {
  const cart = await Cart.findByIdAndDelete(id);
  return cart;
};

export const CartService = {
  createAdmin,
  getCartsByServiceId,
  getCarts,
  deleteCart,
};
