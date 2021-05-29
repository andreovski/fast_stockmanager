import { Box, Separetor } from "./style";
import { Field, ErrorMessage } from "formik";

export default function Input({
  labelhtmlFor,
  labelTitle,
  typeInput,
  textArea,
  note,
}) {
  return (
    <Box>
      <label htmlFor={labelhtmlFor}>{labelTitle}</label>
      {textArea ? (
        <Separetor>
          <Field as="textarea" type="text" name={labelhtmlFor} />
          <ErrorMessage component="span" name={labelhtmlFor} />
        </Separetor>
      ) : (
        <>
          <p>{note}</p>
          <Field type={typeInput} name={labelhtmlFor} />
          <ErrorMessage component="span" name={labelhtmlFor} />
        </>
      )}
    </Box>
  );
}
