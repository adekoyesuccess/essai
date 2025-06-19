import { NextResponse } from "next/server";
import { registerUser } from "@/lib/auth";
import { ZodError, z } from "zod";

// Input validation schema
const registerSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const { email, password, name } = registerSchema.parse(body);

    // Attempt to register user
    const user = await registerUser({ email, password, name });

    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);

    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    // Handle known errors from registerUser
    if (error instanceof Error) {
      const status = error.message.includes("already exists") ? 409 : 400;
      return NextResponse.json({ error: error.message }, { status });
    }

    // Handle unknown errors
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 