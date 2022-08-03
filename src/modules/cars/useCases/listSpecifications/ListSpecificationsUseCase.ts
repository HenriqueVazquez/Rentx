import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

export class ListSpecificationsUseCase {
  constructor(private listSpecificationsUseCase: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.listSpecificationsUseCase.list();

    return specifications;
  }
}
