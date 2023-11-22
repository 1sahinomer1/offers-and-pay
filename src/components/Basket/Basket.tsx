import { Button, Flex, Typography } from "antd";

import { useAppSelector } from "store/hooks";

import { BasketProps } from "./types";

import {
  mainFlex,
  titleStyle,
  selectedPackageStyle,
  paymentButton,
} from "./styles";

const Basket = ({ handleButtonClick }: BasketProps) => {
  const { Title, Text } = Typography;

  const { myBasket } = useAppSelector(state => state.basket);
  return (
    <Flex style={mainFlex} vertical>
      <Title level={4} style={titleStyle}>
        Sepetteki Paketler
      </Title>
      {myBasket.length > 0 ? (
        myBasket.map(basket => (
          <Flex
            style={selectedPackageStyle}
            justify="space-between"
            align="center"
          >
            <Text>{basket.name}</Text>
            <Flex justify="center">
              <Title level={5}>{basket.amount}</Title>
              <Text strong>{basket.currency}</Text>
            </Flex>
          </Flex>
        ))
      ) : (
        <Text>Sepetinizde herhangi bir paket bulunmuyor.</Text>
      )}
      <Button
        disabled={myBasket.length === 0}
        style={paymentButton}
        type="primary"
        block
        onClick={handleButtonClick}
      >
        Ödeme Yap
      </Button>
    </Flex>
  );
};

export default Basket;
