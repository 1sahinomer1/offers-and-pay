import { Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "store/hooks";

import { Logo, User } from "icons";

import { baseStyle, titleStyle } from "./styles";

const Header = () => {
  const { Title } = Typography;

  const navigate = useNavigate();
  const { fullName } = useAppSelector(state => state.user);

  return (
    <Flex style={baseStyle} justify="space-between">
      <Logo
        onClick={() => navigate("/packages")}
        style={{ cursor: "pointer" }}
      />
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
