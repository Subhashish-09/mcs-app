import { signInWithEmailAndPassword } from "../actions";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";

const LoginAuth = ({ next }) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const result = await signInWithEmailAndPassword(
        values.email,
        values.password
      );
      const { error } = JSON.parse(result);
      if (!error) {
        router.replace(next ?? "/");
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
        variant="bordered"
        placeholder="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <Button color="primary" type="submit" className="w-full flex gap-2">
        SignIn
      </Button>
    </form>
  );
};

export default LoginAuth;
