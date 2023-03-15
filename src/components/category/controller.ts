import type { Request, Response } from "express";
import prisma from "../../datasource";
import { success, failure } from "../../responses";

export const store = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;
        const categories = await prisma.category.create({ data })
        return success({ res, status: 201, message: "Category created" });
    } catch (error) {
        return failure({ res, message: error });
    }
}

export const findAll = async (_req: Request, res: Response): Promise<Response> => {

    try {
        const categories = await prisma.category.findMany({ include: { products: true } });
        return success({ res, data: categories });
    } catch (error) {
        return failure({ res, message: error });
    }

}

export const findOne = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const id = Number(req.params.id)
        const category = await prisma.category.findUnique({ where: { id }, include: { products: true } });
        return success({ res, data: category ?? "Category not found" });
    } catch (error) {
        return failure({ res, message: error });
    }
}