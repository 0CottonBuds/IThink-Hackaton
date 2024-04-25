import { User } from './interfaces/interfaces';

const users: User[] = [];

export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

export function createUser(user: User): User {
  users.push(user);
  return user;
}