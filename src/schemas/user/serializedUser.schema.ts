import * as yup from "yup";

export const serializedUserSchema = yup.object().shape({
  address: yup.object().shape({
    state: yup.string().lowercase().required(),
    city: yup.string().lowercase().required(),
    district: yup.string().lowercase().required(),
    complement: yup.string(),
    number: yup.number().positive().required(),
    street: yup.string().lowercase().required(),
    address_id: yup.string().uuid(),
  }),
  isAdmin: yup.boolean(),
  cpf: yup.string().required(),
  lastName: yup.string().lowercase().required(),
  firstName: yup.string().lowercase().required(),
  email: yup.string().email().lowercase().required(),
  user_id: yup.string().uuid(),
});
