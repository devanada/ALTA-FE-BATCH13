import { FC } from "react";

import Layout from "@/components/Layout";
import { useTitle } from "@/utils/hooks";

const Register: FC = () => {
  useTitle("Register | User Management");

  return <Layout>Register</Layout>;
};

export default Register;
