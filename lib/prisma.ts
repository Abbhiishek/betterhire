import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient as PrismaEdgeClient } from "@prisma/client/edge";

export const clientPrisma = new PrismaClient().$extends(withAccelerate())
export const EdgePrisma = new PrismaClient().$extends(withAccelerate())