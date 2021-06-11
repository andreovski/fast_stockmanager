import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .max(100, "O nome deve conter no máximo 100 caracteres.")
    .required("O nome é obrigatório."),
  description: Yup.string().required("O produto precisa conter uma descrição."),
  value: Yup.number()
    .positive("O valor não pode ser menor que 0.")
    .required("O valor é obrigatório."),
  height: Yup.number()
    .integer("A altura deve ser em centimetros.")
    .positive("O valor não pode ser menor que 0.")
    .required("A altura é obrigatória"),
  width: Yup.number()
    .integer("A largura deve ser em centimetros.")
    .positive("O valor não pode ser menor que 0.")
    .required("A largura é obrigatória"),
  length: Yup.number()
    .integer("O comprimento deve ser em centimetros.")
    .positive("O valor não pode ser menor que 0.")
    .required("O comprimento é obrigatório"),
  weigth: Yup.number()
    .positive("O valor não pode ser menor que 0.")
    .required("O peso é obrigatório."),
  code: Yup.number("O código deve ser numérico")
    .positive("O valor não pode ser menor que 0.")
    .required("O código do produto é obrigatório"),
  acquisition: Yup.date()
    .required("Insira uma data.")
    .max(new Date(), "Data deve ser inferior a data atual."),
});
