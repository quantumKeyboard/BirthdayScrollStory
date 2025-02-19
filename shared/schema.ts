import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const wishes = pgTable("wishes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  message: text("message").notNull(),
  photoUrl: text("photo_url").notNull(),
});

export const insertWishSchema = createInsertSchema(wishes);
export type InsertWish = z.infer<typeof insertWishSchema>;
export type Wish = typeof wishes.$inferSelect;
