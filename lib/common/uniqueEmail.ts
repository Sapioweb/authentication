import { User } from "../models/user.model";

export const uniqueEmail = async (email: string) => {
  const user = await User.findOne({ email }).countDocuments();
  return user <= 0;
};
