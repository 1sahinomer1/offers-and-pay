import { Layout } from "antd";

import { MainLayoutProps } from "./types";

import { contentStyle } from "./styles";
import { Header } from "components";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout style={contentStyle}>
      <Header />
      {children}
    </Layout>
  );
};

export default MainLayout;
