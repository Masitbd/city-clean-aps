import { IUser } from '../user/interface';
import { User } from '../user/modal';

const getProfile = async (id: string) => {
  const profile = await User.findById(id);
  return profile;
};

const updateProfile = async (id: string, payload: Partial<IUser>) => {
  const profile = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return profile;
};

export const ProfileService = {
  getProfile,
  updateProfile,
};
