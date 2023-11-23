import { Button, Col, Flex, Row, Typography } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Package } from "components";

import { MainLayout } from "layouts";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { getPackages } from "store/thunks/packagesThunks";

import { calculateSelectedPackagesTotalPrice } from "utils";

import { bottomFlex, mainFlex, priceText } from "./styles";

const HomePage = () => {
  const { Text } = Typography;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { packages } = useAppSelector(state => state.packages);
  const { myBasket } = useAppSelector(state => state.basket);

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  return (
    <MainLayout>
      <Flex style={mainFlex} vertical>
        <Row gutter={[70, 40]}>
          {packages.map(packet => (
            <Col lg={12} key={packet.id}>
              <Package packet={packet} />
            </Col>
          ))}
        </Row>
        <Flex style={bottomFlex} justify="space-between">
          <Flex>
            <Text>Seçilen Paket Tutarı:</Text>
            <Text strong style={priceText}>
              {calculateSelectedPackagesTotalPrice({ basket: myBasket })}₺
            </Text>
          </Flex>

          <Button
            type="primary"
            htmlType="submit"
            disabled={myBasket.length === 0}
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Devam Et
          </Button>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default HomePage;
