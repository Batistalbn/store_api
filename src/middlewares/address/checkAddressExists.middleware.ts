import { NextFunction, Request, Response } from "express";
import { Address } from "../../entities";
import { addressRepository } from "../../repositories";

export const checkAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { validData } = req;

  const validDataAddress = {
    street: (validData as Address).street,
    number: (validData as Address).number,
    complement: (validData as Address).complement,
    district: (validData as Address).district,
    city: (validData as Address).city,
    state: (validData as Address).state,
    residents: [],
  };

  const foundAddress = await addressRepository.getOne({
    street: validDataAddress.street,
    number: validDataAddress.number,
  });

  req.address = foundAddress;
  req.validAddress = validDataAddress;

  return next();
};
