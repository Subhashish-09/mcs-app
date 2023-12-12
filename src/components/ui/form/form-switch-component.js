import { Switch } from "@nextui-org/react";

const FormSwitchComponent = ({ name, label, formik }) => {
  return (
    <Switch
      name={name}
      onChange={formik.handleChange}
      isSelected={formik.values.practise_is_active}
      size="lg"
    >
      {label}
    </Switch>
  );
};

export default FormSwitchComponent;
