import { PrismaClient } from '@prisma/client'
import { users, cards } from './seedData.json'
const prisma = new PrismaClient()

const load = async () => {
    try {
        await prisma.card.deleteMany();
        console.log("Deleted records in cards table");
        
        await prisma.user.deleteMany();
        console.log("Deleted records in users table");

        await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`;
        console.log("reset user auto increment to 1");

        await prisma.$executeRaw`ALTER SEQUENCE "Card_id_seq" RESTART WITH 1;`;
        console.log("reset card auto increment to 1");

        await prisma.user.createMany({
            data: users
        });
        console.log("Added user data");

        await prisma.card.createMany({
            data: cards
        });
        console.log("added cards data");

    } catch(e) {
        console.error(e);
    } finally {
        await prisma.$disconnect()
        process.exit(1);
    }
}

load();