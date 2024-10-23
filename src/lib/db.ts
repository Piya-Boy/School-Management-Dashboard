import { PrismaClient } from "@prisma/client";

const prismsClientSingleton = () => {
    return new PrismaClient();
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismsClientSingleton>;
} & typeof global;

export const db = globalThis.prismaGlobal || prismsClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;