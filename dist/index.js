"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@mikro-orm/core");
const express_1 = __importDefault(require("express"));
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const duty_1 = require("./resolvers/duty");
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    const migrator = orm.getMigrator();
    await migrator.up();
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [hello_1.HelloResolver, duty_1.DutyResolver],
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
//# sourceMappingURL=index.js.map