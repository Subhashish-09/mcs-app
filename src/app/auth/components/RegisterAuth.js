import { signUpWithEmailAndPassword } from "../actions";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import { useFormik } from "formik";

const RegisterAuth = ({ next }) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (values) => {
      const result = await signUpWithEmailAndPassword(
        values.email,
        values.password
      );
      const { error } = JSON.parse(result);
      if (!error) {
        router.reload();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full space-y-6">
      <Input
        name="email"
        variant="bordered"
        placeholder="example@gmail.com"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Input
        name="password"
        variant="bordered"
        placeholder="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <Input
        name="confirm_password"
        variant="bordered"
        placeholder="Confirm Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirm_password}
      />
      <Button color="primary" type="submit" className="w-full flex gap-2">
        Register
      </Button>
    </form>
  );
};

export default RegisterAuth;
