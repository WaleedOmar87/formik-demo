import { Form } from "./components/Form";

function App() {
  const handleChange = (event: any) => {
    console.log(event.target.name);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <Form
        children={[
          {
            id: "user-name",
            name: "user-name",
            classes: "w-100",
            type: "textfield",
            defaultValue: "User Name",
          },
        ]}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
}

export default App;
