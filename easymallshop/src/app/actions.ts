
'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { getProductRecommendations, type ProductRecommendationsInput } from '@/ai/flows/product-recommendations';
import { login, logout, signup } from '@/lib/session';

export async function getRecommendationsAction(input: ProductRecommendationsInput) {
  try {
    const result = await getProductRecommendations(input);
    return { success: true, data: result.products };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to get recommendations.' };
  }
}

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export async function loginAction(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await login(validatedFields.data);
  } catch (e) {
    if (e instanceof Error && e.message === 'Invalid credentials') {
        return { message: "Invalid email or password." };
    }
    return { message: "An unexpected error occurred." };
  }

  return redirect('/');
}

const signupSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export async function signupAction(prevState: any, formData: FormData) {
    const validatedFields = signupSchema.safeParse(Object.fromEntries(formData.entries()));
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await signup(validatedFields.data);
    } catch (e) {
        if (e instanceof Error && e.message.includes('already exists')) {
            return { message: "A user with this email already exists." };
        }
        return { message: "An unexpected error occurred." };
    }

    return redirect('/');
}

export async function logoutAction() {
  await logout();
  redirect('/login');
}

export async function searchAction(formData: FormData) {
  const query = formData.get('query') as string;
  if (query) {
    redirect(`/shop/all?q=${encodeURIComponent(query)}`);
  } else {
    redirect('/shop/all');
  }
}
