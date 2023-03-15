"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllbyName = exports.findAllbyCategory = exports.findAll = exports.store = void 0;
const datasource_1 = __importDefault(require("../../datasource"));
const responses_1 = require("../../responses");
const store = async (req, res) => {
    try {
        const data = req.body;
        const products = await datasource_1.default.product.create({ data });
        return (0, responses_1.success)({ res, status: 201, message: "Product created" });
    }
    catch (error) {
        return (0, responses_1.failure)({ res, message: error });
    }
};
exports.store = store;
const findAll = async (_req, res) => {
    try {
        const products = await datasource_1.default.product.findMany();
        return (0, responses_1.success)({ res, data: products });
    }
    catch (error) {
        return (0, responses_1.failure)({ res, message: error });
    }
};
exports.findAll = findAll;
const findAllbyCategory = async (req, res) => {
    try {
        const idCategory = Number(req.params.idCategory);
        const products = await datasource_1.default.product.findMany({ where: {
                categoryId: idCategory,
            } });
        return (0, responses_1.success)({ res, data: products });
    }
    catch (error) {
        return (0, responses_1.failure)({ res, message: error });
    }
};
exports.findAllbyCategory = findAllbyCategory;
const findAllbyName = async (req, res) => {
    try {
        const namePart = req.params.name;
        const products = await datasource_1.default.product.findMany({
            where: {
                name: { contains: namePart }
            }
        });
        return (0, responses_1.success)({ res, data: products });
    }
    catch (error) {
        return (0, responses_1.failure)({ res, message: error });
    }
};
exports.findAllbyName = findAllbyName;
//# sourceMappingURL=controller.js.map