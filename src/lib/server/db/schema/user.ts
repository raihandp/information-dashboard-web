import { mysqlTable, varchar, timestamp, primaryKey, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';

export const users = mysqlTable('user', {
	id: int('id').autoincrement().primaryKey(),
	username: varchar('username', { length: 30 }).unique().notNull(),
	password: varchar('password', { length: 255 }).notNull(),
	userAuthToken: varchar('user_auth_token', { length: 255 }).unique(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
});

export const userRelations = relations(users, ({ many }) => ({
	userRole: many(userRoles)
}));

export const roles = mysqlTable('role', {
	id: int('id').autoincrement().primaryKey(),
	role: varchar('role', { length: 30 }).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
});

export const roleRelations = relations(roles, ({ many }) => ({
	userRole: many(userRoles)
}));

export const userRoles = mysqlTable(
	'user_role',
	{
		userId: int('user_id')
			.notNull()
			.references(() => users.id),
		roleId: int('role_id')
			.notNull()
			.references(() => roles.id),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
	},
	(t) => [primaryKey({ columns: [t.userId, t.roleId] })]
);

export const userRoleRelations = relations(userRoles, ({ one }) => ({
	user: one(users, {
		fields: [userRoles.userId],
		references: [users.id]
	}),
	role: one(roles, {
		fields: [userRoles.roleId],
		references: [roles.id]
	})
}));
