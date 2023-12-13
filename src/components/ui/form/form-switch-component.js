import { Switch } from "@nextui-org/react";

const FormSwitchComponent = ({ name, label, formik, isSelected }) => {
  console.log(formik.values.name);
  return (
    <Switch
      name={name}
      onChange={formik.handleChange}
      isSelected={isSelected}
      size="lg"
    >
      {label}
    </Switch>
  );
};

export default FormSwitchComponent;
