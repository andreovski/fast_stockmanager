import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const currentDate = format(new Date(), "PP", {
  locale: ptBR,
});
