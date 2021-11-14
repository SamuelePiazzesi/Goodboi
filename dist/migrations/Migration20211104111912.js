"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211104111912 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211104111912 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "duty" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null);');
    }
}
exports.Migration20211104111912 = Migration20211104111912;
//# sourceMappingURL=Migration20211104111912.js.map