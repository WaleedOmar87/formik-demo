import { TextField } from "./TextField";

export function FormControl(props: { type: string }) {
  if (props.type == "textfield") {
    return <TextField {...props} />;
  }
}
