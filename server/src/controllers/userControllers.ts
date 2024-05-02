import { Request, Response } from 'express';
import * as userService from './services/userService';

export async function createUser(req: Request, res: Response) {
  const { email, userName, password } = req.body;

  try {
    const newUser = await userService.createUser(email, userName, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await userService.findUserByEmail(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
}