import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private listCategoriesUseCase: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.listCategoriesUseCase.list();

    return categories;
  }
}
