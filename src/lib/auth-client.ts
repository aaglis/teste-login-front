import { createAuthClient } from "better-auth/react";

// Frontend connects to the API through the URL in env (VITE_API_URL).
export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession } = authClient;
