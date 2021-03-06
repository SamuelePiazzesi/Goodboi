"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const Duty_1 = require("./entities/Duty");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Duty_1.Duty],
    dbName: "goodboi",
    type: "postgresql",
    user: "postgres",
    password: "root",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map