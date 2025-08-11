import { PrismaClient } from '../generated/prisma';
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient({
  log: ['query', 'error', 'info', 'warn'], // Enable logs for debugging
});

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export { prisma };