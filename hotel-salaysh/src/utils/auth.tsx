import { getServerSession, NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./singleinstance";
import { connect } from "node:tls";


declare module "next-auth" {
    interface Session {
        user:User & {
            isAdmin: boolean;
        }
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: boolean;
    }
}

export const authOptions: NextAuthOptions = {
    
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token}) {
            const user = await prisma.user.findUnique({
                where: {
                    email: token.email!
                }
            })
            if (user) {
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
        
            if (token) {
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
    },
};

export const getAuthSession = () => getServerSession(authOptions);