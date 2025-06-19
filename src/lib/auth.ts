import { hash } from "bcryptjs";
import { prisma } from "./prisma";

export async function registerUser({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name?: string;
}) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Validate password strength
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  try {
    const exists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || email.split('@')[0], // Use part of email as name if not provided
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to create user");
  }
}

export async function getUserById(id: string) {
  if (!id) {
    throw new Error("User ID is required");
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    console.error('Get user error:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to fetch user");
  }
} 