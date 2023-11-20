import { Flex, Typography } from "antd";

import { useAppSelector } from "store/hooks";

import { Logo, User } from "icons";

import { baseStyle, titleStyle } from "./styles";

const Header = () => {
  const { Title } = Typography;

  const { fullName } = useAppSelector(state => state.user);

  return (
    <Flex style={baseStyle} justify="space-between">
      <Logo />
      <Flex>
        <User />
        <Title level={5} style={titleStyle}>
          {fullName}
        </Title>
      </Flex>
    </Flex>
  );
};

export default Header;
