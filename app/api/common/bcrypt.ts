import bcrypt from 'bcrypt';
export const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  receivedPassword: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, receivedPassword);
  return isMatch;
};
