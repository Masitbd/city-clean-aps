import bcrypt from 'bcrypt';
import config from '../../../config';

const hashPass = async (password: string) => {
  const hashedPass = await bcrypt.hash(
    password,
    Number(config.bycrypt_salt_rounds)
  );
  return hashedPass;
};

const passMatched = async (password: string, hashPass: string) => {
  const hashedPass = await bcrypt.compare(password, hashPass);
  return hashedPass;
};

export const AuthUtils = { hashPass, passMatched };
