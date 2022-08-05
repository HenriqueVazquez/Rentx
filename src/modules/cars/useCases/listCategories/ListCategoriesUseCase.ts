import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private listCategoriesUseCase: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.listCategoriesUseCase.list();

    return categories;
  }
}
