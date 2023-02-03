import { Request } from "express";
import { Category } from "../../entities";
import { IReturnCategory } from "../../interfaces/category";
import { categoryRepository } from "../../repositories";
import { serializedCategorySchema } from "../../schemas/category";

class CategoryService {
  create = async ({
    category,
    validData,
  }: Request): Promise<IReturnCategory> => {
    if (category) {
      return {
        status: 409,
        message: { message: "Category already exists" },
      };
    }

    const newCategory = await categoryRepository.save(validData as Category);

    return {
      status: 201,
      message: await serializedCategorySchema.validate(newCategory, {
        stripUnknown: true,
      }),
    };
  };

  getAll = async (): Promise<IReturnCategory> => {
    const categoryList = await categoryRepository.getAll();
    const serializedCategory = [];

    for (let i = 0; i < categoryList.length; i++) {
      serializedCategory.push(
        await serializedCategorySchema.validate(categoryList[i], {
          stripUnknown: true,
        })
      );
    }

    return {
      status: 200,
      message: serializedCategory,
    };
  };

  update = async ({
    category,
    validData,
  }: Request): Promise<IReturnCategory> => {
    await categoryRepository.update(category.category_id, {
      ...(validData as Category),
    });

    const { category_id } = category;
    const categoryUpdate = await categoryRepository.getOne({ category_id });

    return {
      status: 200,
      message: await serializedCategorySchema.validate(categoryUpdate, {
        stripUnknown: true,
      }),
    };
  };

  delete = async ({ category }: Request) => {
    await categoryRepository.delete(category.category_id);
  };
}

export default new CategoryService();
