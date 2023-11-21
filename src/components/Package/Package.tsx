//the photo server was not working, I added another alternative

import { Flex, List, Typography } from "antd";

import { PackageProps } from "./types";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { addToBasket, deleteFromBasket } from "store/slices/basketSlice";

import { colors } from "theme";
import {
  childFlex,
  listStyle,
  mainFlex,
  resetMargin,
  tagStyle,
  tagsFlex,
} from "./styles";

const Package = ({ packet }: PackageProps) => {
  const { Title } = Typography;

  const dispatch = useAppDispatch();
  const { myBasket } = useAppSelector(state => state.basket);

  const handlePackageClick = (packageId: string) => {
    const isSelected = myBasket.some(pkg => pkg.id === packageId);

    if (isSelected) dispatch(deleteFromBasket(packageId));
    else dispatch(addToBasket(packet));
  };

  return (
    <Flex
      style={mainFlex(myBasket.some(pkg => pkg.id === packet.id))}
      onClick={() => handlePackageClick(packet.id)}
    >
      <img
        src={`https://picsum.photos/200` || packet.imagePath}
        alt={packet.name}
        style={{ borderRadius: "8px 0 0 8px" }}
      />
      <Flex vertical style={childFlex} justify="space-between">
        <Flex vertical>
          <Flex justify="space-between">
            <Title level={4} style={resetMargin}>
              {packet.name}
            </Title>
            <Title level={4} style={resetMargin}>
              {packet.amount} {packet.currency}
            </Title>
          </Flex>

          <List
            grid={{
              gutter: 16,
            }}
            dataSource={packet.details}
            style={listStyle}
            renderItem={item => (
              <List.Item>
                <span style={{ marginRight: "8px", color: colors.darkGray }}>
                  •
                </span>
                {item}
              </List.Item>
            )}
          />
        </Flex>

        <Flex style={tagsFlex}>
          <List
            grid={{
              gutter: 16,
            }}
            dataSource={packet.tags}
            renderItem={item => <List.Item style={tagStyle}>{item}</List.Item>}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Package;
