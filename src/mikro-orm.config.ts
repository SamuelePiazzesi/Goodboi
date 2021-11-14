import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Duty } from "./entities/Duty";

export default {
	migrations: {
		path: path.join(__dirname, "./migrations"), // path to the folder with migrations
		pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
	},
	entities: [Duty],
	dbName: "goodboi",
	type: "postgresql",
	user: "postgres",
	password: "root",
	debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
