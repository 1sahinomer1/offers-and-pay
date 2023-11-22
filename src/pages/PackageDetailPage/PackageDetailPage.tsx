import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Flex, List, Typography } from "antd";

import { MainLayout } from "layouts";

import { Basket } from "components";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { setSelectedPackage } from "store/slices/packagesSlice";
import { getPackages } from "store/thunks/packagesThunks";

import {
  amountText,
  containerFlex,
  mainFlex,
  rightFlex,
  tagStyle,
  textAreaStyle,
} from "./styles";

const PackageDetailPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { Text } = Typography;

  const { selectedPackage } = useAppSelector(state => state.packages);
  const { packages } = useAppSelector(state => state.packages);

  useEffect(() => {
    //I defined here because there is no service to send a request according to the id of the package
    if (selectedPackage === null) {
      if (packages.length === 0) {
        dispatch(getPackages());
      }
      const packageFromUrl = packages.find(pkg => pkg.id === id);
      if (packageFromUrl) {
        dispatch(setSelectedPackage(packageFromUrl));
      }
    }
  }, [id, packages, selectedPackage]);

  return (
    <MainLayout>
      <Flex style={containerFlex} justify="space-between">
        <Flex style={mainFlex} vertical>
          <Flex>
            <Text strong>Paket Detay | </Text>
            <Text strong style={amountText}>
              {selectedPackage?.amount} {selectedPackage?.currency}
            </Text>
          </Flex>
          <img
            src={`https://picsum.photos/650/200` || selectedPackage?.imagePath}
            alt={selectedPackage?.name}
            style={{ borderRadius: "8px ", margin: "12px 0 48px 0" }}
          ></img>
          <Flex justify="space-between">
            <Text strong>Detay Açıklama </Text>
            <List
              grid={{
                gutter: 16,
              }}
              dataSource={selectedPackage?.tags}
              renderItem={item => (
                <List.Item style={tagStyle}>{item}</List.Item>
              )}
            />
          </Flex>
          <Flex style={textAreaStyle} vertical>
            <Text strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio,
              semper id mauris nec, ornare luctus elit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Mauris eu justo sapien. Nullam turpis magna, laoreet at finibus
              sit amet, ultrices et dolor. Suspendisse vestibulum gravida quam,
              nec interdum justo pulvinar nec. Aenean quam mauris, fermentum eu
              iaculis non, egestas a lorem.
            </Text>
            <br />
            <br />
            <Text strong>
              Sed ante justo, pulvinar dapibus enim id, euismod feugiat arcu.
              Mauris dictum sed tortor ut placerat. Sed leo ante, laoreet at
              egestas ut, dapibus et turpis. Duis non enim sed ante aliquet
              maximus eu et dui. Sed consequat iaculis libero, id pharetra purus
              blandit vitae. Etiam ut lobortis tortor, sed efficitur tortor.
              Duis facilisis quam sem, quis pulvinar erat aliquet sit amet.
              Aliquam velit orci, pellentesque eget varius finibus, sodales quis
              dolor.
            </Text>
          </Flex>
        </Flex>
        <Flex style={rightFlex}>
          <Basket handleButtonClick={() => navigate("/checkout")} />
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default PackageDetailPage;
