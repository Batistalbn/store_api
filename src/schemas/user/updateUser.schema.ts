import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  password: yup.string().optional(),
  firstName: yup.string().lowercase().optional(),
  lastName: yup.string().lowercase().optional(),
  cpf: yup.string().optional(),
});
