"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpFromSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpFromSchema = zod_1.default.object({
    email: zod_1.default.string().email().trim(),
    password: zod_1.default.string().trim(),
});
//# sourceMappingURL=sign-in.zod.js.map