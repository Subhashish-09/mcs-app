import { Input } from "@nextui-org/react";

const FormInputComponent = ({ label, name, formik, length, value }) => {
  return (
    <>
      <Input
        defaultValue={value}
        variant="bordered"
        type="text"
        label={label}
        name={name}
        className="mb-5"
        onChange={formik.handleChange}
        value={formik.values.name}
        endContent={length}
      />
    </>
  );
};

export default FormInputComponent;
