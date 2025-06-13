ALTER TABLE `role` RENAME COLUMN `createdAt` TO `created_at`;--> statement-breakpoint
ALTER TABLE `role` RENAME COLUMN `updatedAt` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `user_role` RENAME COLUMN `userId` TO `user_id`;--> statement-breakpoint
ALTER TABLE `user_role` RENAME COLUMN `roleId` TO `role_id`;--> statement-breakpoint
ALTER TABLE `user_role` RENAME COLUMN `createdAt` TO `created_at`;--> statement-breakpoint
ALTER TABLE `user_role` RENAME COLUMN `updatedAt` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN `userAuthToken` TO `user_auth_token`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN `createdAt` TO `created_at`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN `updatedAt` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `user` DROP INDEX `user_userAuthToken_unique`;--> statement-breakpoint
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_userId_user_id_fk`;
--> statement-breakpoint
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_roleId_role_id_fk`;
--> statement-breakpoint
ALTER TABLE `user_role` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `user_role` ADD PRIMARY KEY(`user_id`,`role_id`);--> statement-breakpoint
ALTER TABLE `user` ADD CONSTRAINT `user_user_auth_token_unique` UNIQUE(`user_auth_token`);--> statement-breakpoint
ALTER TABLE `user_role` ADD CONSTRAINT `user_role_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_role` ADD CONSTRAINT `user_role_role_id_role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`) ON DELETE no action ON UPDATE no action;