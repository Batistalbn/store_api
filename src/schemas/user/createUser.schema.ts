import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
  firstName: yup.string().lowercase().required(),
  lastName: yup.string().lowercase().required(),
  cpf: yup.string().required(),
  isAdmin: yup.boolean(),
  street: yup.string().lowercase().required(),
  number: yup.number().positive().required(),
  complement: yup.string().lowercase(),
  district: yup.string().lowercase(),
  city: yup.string().lowercase().required(),
  state: yup.string().lowercase().required(),
});
