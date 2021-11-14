"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DutyResolver = void 0;
const Duty_1 = require("../../entities/Duty");
const type_graphql_1 = require("type-graphql");
let DutyResolver = class DutyResolver {
    duties({ em }) {
        return em.find(Duty_1.Duty, {});
    }
    duty({ em }, id) {
        return em.findOne(Duty_1.Duty, { id });
    }
    createDuty({ em }, ) {
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Duty_1.Duty]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DutyResolver.prototype, "duties", null);
__decorate([
    (0, type_graphql_1.Query)(() => Duty_1.Duty, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], DutyResolver.prototype, "duty", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Duty_1.Duty),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('title', () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DutyResolver.prototype, "createDuty", null);
DutyResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DutyResolver);
exports.DutyResolver = DutyResolver;
//# sourceMappingURL=index.js.map