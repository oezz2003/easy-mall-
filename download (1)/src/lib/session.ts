
'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// In a real application, these would be retrieved from a database
const users = [
  { id: '1', email: 'm@example.com', password: 'password', name: 'Admin User' },
];

const secretKey = process.env.SESSION_SECRET || 'your-super-secret-key-that-is-long';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h') // Token expires in 1 hour
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    // This can happen if the token is expired or invalid
    return null;
  }
}

export async function login({ email, password }: { email: string, password: string }) {
  // NOTE: This is a simplified example. In a real app, you would hash passwords.
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Create the session
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  const session = await encrypt({ user: { id: user.id, email: user.email, name: user.name }, expires });

  // Save the session in a cookie
  cookies().set('session', session, { expires, httpOnly: true });
}


export async function signup({firstName, lastName, email, password}: {firstName: string, lastName: string, email: string, password: string}){
    // NOTE: This is a simplified example. In a real app, you would store users in a database.
    const existingUser = users.find((u) => u.email === email);
    if(existingUser) {
        throw new Error('User with this email already exists.');
    }
    
    const newUser = {
        id: String(users.length + 1),
        name: `${firstName} ${lastName}`,
        email,
        password // In a real app, hash this!
    };
    users.push(newUser);

    // Automatically log in the new user
    await login({email, password});
}


export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}
