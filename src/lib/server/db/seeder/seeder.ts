import { roles, users, userRoles } from '$lib/server/db/schema/user';
import type { MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export const seeder = async (
	db: MySql2Database<Record<string, never>> & {
		$client: mysql.Pool;
	}
) => {};
