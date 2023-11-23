import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Form, Flex, Input, Typography } from "antd";

import { MainLayout } from "layouts";

import { Basket } from "components";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { createPayment, getContract } from "store/thunks/paymentThunks";

import { FieldType } from "./types";
import { formatCardNumber } from "utils";

import {
  containerFlex,
  contractFlex,
  contractStyle,
  mainFlex,
  rightFlex,
} from "./styles";

const CheckoutPage = () => {
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { contractText } = useAppSelector(state => state.payment);
  const { myBasket } = useAppSelector(state => state.basket);

  const { Text } = Typography;

  useEffect(() => {
    dispatch(getContract());
  }, [dispatch]);

  const handleCardInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const sanitizedInput = e.target.value.replace(/[^0-9\s]/g, "");
    const formattedCardNumber = formatCardNumber(sanitizedInput);
    form.setFieldsValue({ cardNumber: formattedCardNumber });
  };

  const handleExpireDateInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const sanitizedInput = e.target.value.replace(/[^0-9]/g, "");
    const month = sanitizedInput.slice(0, 2);
    const year = sanitizedInput.slice(2, 4);

    let formattedExpireDate = `${month}`;
    if (year) {
      formattedExpireDate += `/${year}`;
    }

    form.setFieldsValue({ expireDate: formattedExpireDate });
  };

  const handleButtonClick = async () => {
    try {
      await form.validateFields();
      const formValues = form.getFieldsValue();
      const cardNumberWithoutSpaces = formValues.cardNumber.replaceAll(" ", "");
      const selectedPacketIds = myBasket.map(packet => packet.id);

      const requestObject = {
        ...formValues,
        packageIds: selectedPacketIds,
        cardNumber: cardNumberWithoutSpaces,
      };

      const res: any = await dispatch(createPayment(requestObject));

      if (!res.error) {
        navigate("/success");
      }
    } catch (err) {
      toast.error("formda bir şeyler eksik yada hatalı");
    }
  };
  return (
    <MainLayout>
      <Flex style={containerFlex} justify="space-between">
        <Flex style={mainFlex} vertical>
          <Flex vertical>
            <Form name="basic" layout="vertical" autoComplete="off" form={form}>
              <Form.Item<FieldType>
                name="cardHolderName"
                label="Kart Üzerindeki İsim Soyisim"
                rules={[
                  {
                    required: true,
                    message: "Lütfen isim soyisminizi giriniz!",
                    min: 3,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                name="cardNumber"
                label="Kart Numaranız"
                rules={[
                  {
                    required: true,
                    message: "Lütfen kart numaranızı girin!",
                    min: 19,
                  },
                ]}
              >
                <Input
                  onChange={handleCardInputChange}
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxLength={19}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Son Kul. Tar."
                name="expireDate"
                rules={[
                  {
                    required: true,
                    message: "Lütfen son kullanma tarihini girin!",
                    min: 5,
                  },
                ]}
              >
                <Input
                  onChange={handleExpireDateInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="CVV/CVC"
                name="cvv"
                rules={[
                  {
                    required: true,
                    message:
                      "CVV Kodunuzu doğru ve eksiksiz girdiğinizden emin olun!",
                    min: 3,
                    max: 3,
                  },
                ]}
              >
                <Input type="password" maxLength={3} minLength={3} />
              </Form.Item>
            </Form>
          </Flex>
          <Flex style={contractFlex} vertical>
            <Text strong>Sözleşme</Text>
            <div
              dangerouslySetInnerHTML={{
                __html: decodeURIComponent(contractText),
              }}
              style={contractStyle}
            ></div>
          </Flex>
        </Flex>
        <Flex style={rightFlex}>
          <Basket handleButtonClick={handleButtonClick} />
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default CheckoutPage;
