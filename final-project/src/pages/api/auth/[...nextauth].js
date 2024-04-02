import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../utils/mongodb";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username } = credentials;

        const client = await clientPromise;
        const db = client.db("final-project");
        const user = await db
          .collection("users")
          .findOne({ username: username });

        if (user) {
          console.log("User found", user);
          return user;
        } else {
          console.log("User not found");
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
