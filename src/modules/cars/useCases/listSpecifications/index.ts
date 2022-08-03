// import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecifationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const categoriesRepository = null;

export const listSpecificationsUseCase = new ListSpecificationsUseCase(
  categoriesRepository
);

export const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);
