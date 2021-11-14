import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import express from "express";
import mikroOrmConfig from "./mikro-orm.config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { DutyResolver } from "./resolvers/duty";

const main = async () => {
	const orm = await MikroORM.init(mikroOrmConfig);
	const migrator = orm.getMigrator();
	await migrator.up();

	const app = express();
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver, DutyResolver],
			validate: false,
		}),
		context: { em: orm.em },
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app });

	app.get("/", (_, res) => {
		res.send("hey");
	});

	app.listen(4000, () => {
		console.log("app started at localhost:4000");
	});
};

main();
