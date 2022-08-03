// import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = null;

export const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
