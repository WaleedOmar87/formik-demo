import { Formik } from "formik";
import { FormControl } from "./FormControl";
type Child = {
  id: string;
  name: string;
  classes: string;
  type: "textfield" | "textarea";
  defaultValue: string;
};
export const Form = ({
  children,
  handleSubmit,
  handleChange,
  schema,
}: {
  children: Child[];
  handleSubmit: (event: any) => void;
  handleChange: (event: any) => void;
  schema?: {};
}) => {
  const initialValues =
    children &&
    children.length &&
    children.map((child: Child) => {
      return {
        [child.id]: child.defaultValue,
      };
    });
  return (
    <Formik
      initialValues={initialValues as any}
      onSubmit={handleSubmit}
      validationSchema={schema}
      onChange={handleChange}
    >
      <form onSubmit={handleSubmit}>
        {children &&
          children.length &&
          children.map((child: Child) => {
            return <FormControl {...child} />;
          })}
      </form>
    </Formik>
  );
};
