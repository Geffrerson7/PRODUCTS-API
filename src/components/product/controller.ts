import type { Request, Response } from "express";
import prisma from "../../datasource";
import { success, failure } from "../../responses";

export const store = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;
        const products = await prisma.product.create({ data })
        return success({ res, status: 201, data: products, message: "Category created" });
    } catch (error) {
        return failure({ res, message: error });
    }
}

export const findAll = async (_req: Request, res: Response): Promise<Response> => {

    try {
        const products = await prisma.product.findMany();
        return success({ res, data: products });
    } catch (error) {
        return failure({ res, message: error });
    }

}

export const findAllbyCategory = async (req: Request, res: Response): Promise<Response> => {

    try {
        const idCategory=Number(req.params.idCategory)
        const products = await prisma.product.findMany({where: {
            categoryId: idCategory,
          }});
        return success({ res, data: products });
    } catch (error) {
        return failure({ res, message: error });
    }

}

export const findAllbyName = async (req: Request, res: Response): Promise<Response> => {

    try {
        const namePart : string = req.params.name
        const products = await prisma.product.findMany({
            where: {
                    name:{contains:namePart}
        }});
        return success({ res, data: products });
    } catch (error) {
        return failure({ res, message: error });
    }

}