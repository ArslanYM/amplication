/***
 * This file was auto-generated by Amplication and should not be modified by hand.
 * The file will be re-generated with every new build, and all changes will be lost.
 * To add a custom seed script, you can safely edit the content of ./customSeed.ts
 ***/

import * as dotenv from "dotenv";
// @ts-ignore
import { PrismaClient } from "@prisma/client";
// @ts-ignore
import { customSeed } from "./customSeed";

if (require.main === module) {
  dotenv.config();

  const { BCRYPT_SALT } = process.env;

  if (!BCRYPT_SALT) {
    throw new Error("BCRYPT_SALT environment variable must be defined");
  }
}

async function seed() {
  console.info("Seeding database...");

  const client = new PrismaClient();
  void client.$disconnect();

  console.info("Seeding database with custom seed...");
  customSeed();

  console.info("Seeded database successfully");
}
