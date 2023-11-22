//the photo server was not working, I added another alternative

import { Flex, List, Typography } from "antd";
import { GiDirectionSign } from "react-icons/gi";
import { IoBagAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { PackageProps } from "./types";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { addToBasket, deleteFromBasket } from "store/slices/basketSlice";
import { setSelectedPackage } from "store/slices/packagesSlice";

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
  const navigate = useNavigate();

  const handlePackageClick = (packageId: string) => {
    const isSelected = myBasket.some(pkg => pkg.id === packageId);

    if (isSelected) dispatch(deleteFromBasket(packageId));
    else dispatch(addToBasket(packet));
  };

  const handleRedirectDetail = () => {
    dispatch(setSelectedPackage(packet));
    navigate(`/packages/${packet.id}`);
  };

  return (
    <Flex style={mainFlex(myBasket.some(pkg => pkg.id === packet.id))}>
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
          <Flex justify="space-between" align="center">
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
            <IoBagAdd
              size={25}
              color={colors.selectedGreen}
              onClick={() => handlePackageClick(packet.id)}
            />
          </Flex>
        </Flex>

        <Flex style={tagsFlex} justify="space-between" align="center">
          <List
            grid={{
              gutter: 16,
            }}
            dataSource={packet.tags}
            renderItem={item => <List.Item style={tagStyle}>{item}</List.Item>}
          />
          <GiDirectionSign
            size={25}
            color={colors.darkGray}
            onClick={handleRedirectDetail}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Package;
