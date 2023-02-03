import * as yup from "yup";

export const serializedCategorySchema = yup.object().shape({
  category_id: yup.string().uuid(),
  name: yup.string().lowercase().required(),
});
