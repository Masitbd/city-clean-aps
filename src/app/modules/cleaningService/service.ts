import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { cleaningServiceSearchableFields } from './constant';
import { ICleaningService, ICleaningServiceSearch } from './interface';
import { CleaningService } from './modal';

const createCleaningService = async (payload: ICleaningService) => {
  const cleaningService = await CleaningService.create(payload);
  return cleaningService;
};

const getCleaningServices = async (
  paginationOptions: IPaginationOptions,
  filtersOptions: ICleaningServiceSearch
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
      $or: cleaningServiceSearchableFields.map(field => ({
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

  const cleaningServices = await CleaningService.find(whereCondition)
    .populate('category')
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await CleaningService.find(whereCondition).count();

  const meta = { page, limit, total };

  return { meta, data: cleaningServices };
};

const getCleaningService = async (id: string) => {
  const cleaningService = await CleaningService.findById(id).populate(
    'category'
  );
  return cleaningService;
};

const updateCleaningService = async (
  id: string,
  payload: Partial<ICleaningService>
) => {
  const cleaningService = await CleaningService.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return cleaningService;
};

const deleteCleaningService = async (id: string) => {
  const cleaningService = await CleaningService.findByIdAndDelete(id);
  return cleaningService;
};

export const CleaningServiceService = {
  createCleaningService,
  getCleaningServices,
  getCleaningService,
  updateCleaningService,
  deleteCleaningService,
};
