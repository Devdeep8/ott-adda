import '@/src/configs/app.config.js' 
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/generated/prisma/client";
import config from '@/src/configs/app.config.js'

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ 
  connectionString,
  max: config.get('db.poolSize') || 10,               
  connectionTimeoutMillis: (config.get('db.poolTimeout') || 30) * 1000, 
});

const prisma = new PrismaClient({ adapter });

export default prisma;
