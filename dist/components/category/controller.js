"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.store = void 0;
const datasource_1 = __importDefault(require("../../datasource"));
const responses_1 = require("../../responses");
const store = async (req, res) => {
    try {
        const data = req.body;
        const categories = await datasource_1.default.category.create({ data });
        return (0, responses_1.success)({ res, status: 201, message: "Category created" });
    }
    catch (error) {
        return (0, responses_1.failure)({ res, message: error });
    }
};
exports.store = store;
const findAll = async (_req, res) => {
    try {
        const categories = await datasource_1.default.category.findMany({ include: { products: true } });
        return (0, responses_1.success)({ res, data: categories });
    }
    catch (error) {
        return (0, responses_1.failure)({ res, message: error });
    }
};
exports.findAll = findAll;
//# sourceMappingURL=controller.js.map