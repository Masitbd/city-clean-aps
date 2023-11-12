import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { categorySearchableFields } from './constant';
import { ICategory, ICategorySearch } from './interface';
import { Category } from './modal';

const createAdmin = async (payload: ICategory) => {
  const category = await Category.create(payload);
  return category;
};

const getCategorys = async (
  paginationOptions: IPaginationOptions,
  filtersOptions: ICategorySearch
) => {
  // Pagination Options
  const { skip, page, limit, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // Sort condition
  const sortCondition: { [key: string]: SortOrder } = {};
  sortCondition[sortBy] = sortOrder;

  // Filter Options
  const { searchTerm } = filtersOptions;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: categorySearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  const whereCondition = Object.keys(andConditions).length
    ? { $and: andConditions }
    : {};

  const categorys = await Category.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await Category.find(whereCondition).count();

  const meta = { page, limit, total };

  return { meta, data: categorys };
};

const getCategory = async (id: string) => {
  const category = await Category.findById(id);
  return category;
};

const updateCategory = async (id: string, payload: Partial<ICategory>) => {
  const category = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return category;
};

const deleteCategory = async (id: string) => {
  const category = await Category.findByIdAndDelete(id);
  return category;
};

export const CategoryService = {
  createAdmin,
  getCategorys,
  getCategory,
  updateCategory,
  deleteCategory,
};
