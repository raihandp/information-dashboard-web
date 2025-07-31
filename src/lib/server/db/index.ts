import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import 'dotenv/config';
// Change Seeder File to Production
import { seeder } from '$lib/server/db/seeder/seeder';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = mysql.createPool(process.env.DATABASE_URL!);

export const db = drizzle(client, { casing: 'snake_case' });

async function main() {
	seeder(db);
}

main();
