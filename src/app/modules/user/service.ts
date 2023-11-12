import { SortOrder } from 'mongoose';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IUser } from '../auth/interface';

import { AuthUtils } from '../auth/utils';
import { userSearchableFields } from './constant';
import { IUserSearch } from './interface';
import { User } from './modal';

const createAdmin = async (payload: IUser) => {
  // Hash password
  payload.password = await AuthUtils.hashPass(payload.password);
  payload.role = ENUM_USER_ROLE.ADMIN;
  const user = await User.create(payload);
  return user;
};

const getUsers = async (
  paginationOptions: IPaginationOptions,
  filtersOptions: IUserSearch
) => {
  // Pagination Options
  const { skip, page, limit, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // Sort condition
  const sortCondition: { [key: string]: SortOrder } = {};
  sortCondition[sortBy] = sortOrder;

  // Filter Options
  const { searchTerm, ...filtersData } = filtersOptions;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map(field => ({
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

  const users = await User.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await User.find(whereCondition).count();

  const meta = { page, limit, total };

  return { meta, data: users };
};

const getUser = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

const updateUser = async (id: string, payload: Partial<IUser>) => {
  const user = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return user;
};

const deleteUser = async (id: string) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

export const UserService = {
  createAdmin,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
