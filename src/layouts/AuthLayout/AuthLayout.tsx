import { Layout } from "antd";

import { AuthLayoutProps } from "./types";

import { contentStyle } from "./styles";

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <Layout style={contentStyle}>{children}</Layout>;
};

export default AuthLayout;
