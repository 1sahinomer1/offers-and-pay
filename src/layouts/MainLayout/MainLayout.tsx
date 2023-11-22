import { Flex, Layout } from "antd";

import { MainLayoutProps } from "./types";

import { childrenStyle, contentStyle } from "./styles";
import { Header } from "components";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout style={contentStyle}>
      <Header />
      <Flex style={childrenStyle}>{children}</Flex>
    </Layout>
  );
};

export default MainLayout;
