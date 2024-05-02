import { User } from './interfaces/interfaces';
import * as userModel from './models/userModel';
import { hashPassword } from './utils/hashPassword';
import { generateUserId } from './utils/generateId';

export async function createUser(email: string, userName: string, password: string): Promise<User> {
  const hashedPassword = await hashPassword(password);
  const newUser: User = {
    email,
    userName,
    password: hashedPassword,
    userId: generateUserId(),
  };

  return userModel.createUser(newUser);
}

export function findUserByEmail(email: string): User | undefined {
  return userModel.findUserByEmail(email);
}