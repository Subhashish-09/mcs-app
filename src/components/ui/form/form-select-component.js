import { Select } from "@nextui-org/react";

const FormSelectComponent = ({
  label,
  placeholder,
  name,
  selectedKeys,
  children,
  formik,
}) => {
  return (
    <Select
      label={label}
      variant="bordered"
      placeholder={placeholder}
      name={name}
      selectedKeys={selectedKeys}
      onChange={formik.handleChange}
      value={formik.values.name}
      className="mb-5"
    >
      {children}
    </Select>
  );
};

export default FormSelectComponent;
