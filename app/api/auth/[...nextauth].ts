export {};

import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const { username, password } = credentials as any;

        if(username !== "admin" && password !== "123") {
          return null;
        }

        return {id: "1234", name: "someone"}
      },
    }),
  ],
  // pages: {
  //   signIn: "/login"
  // }
};

export default NextAuth(authOptions);
