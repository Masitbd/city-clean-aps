import { IBookingSearch } from '../booking/interface';
import { contentSearchableFields } from './constant';
import { IContentManagement } from './interface';
import { ContentManagement } from './modal';

const createContentManagement = async (
  payload: Partial<IContentManagement>
) => {
  const contentManagement = await ContentManagement.create(payload);
  return contentManagement;
};

const getContentManagements = async (filtersOptions: IBookingSearch) => {
  const andConditions = [];
  // Filter Options
  const { searchTerm } = filtersOptions;

  if (searchTerm) {
    andConditions.push({
      $or: contentSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  const whereCondition = Object.keys(andConditions).length
    ? { $and: andConditions }
    : {};

  const contentManagement = await ContentManagement.find(whereCondition);

  return contentManagement;
};

const updateContentManagement = async (
  id: string,
  payload: Partial<IContentManagement>
) => {
  const contentManagement = await ContentManagement.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
  return contentManagement;
};

const deleteContentManagement = async (id: string) => {
  const contentManagement = await ContentManagement.findByIdAndDelete(id);
  return contentManagement;
};

export const ContentManagementService = {
  createContentManagement,
  getContentManagements,
  updateContentManagement,
  deleteContentManagement,
};
