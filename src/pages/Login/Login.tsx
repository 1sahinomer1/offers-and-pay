import { Button, Form, Input } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { AuthLayout } from "layouts";

import { FieldType } from "./types";

import validateMessages from "constants/validateMessages";

import { formStyle } from "./styles";
import { useAppDispatch } from "store/hooks";
import { loginUser } from "store/thunks/authThunks";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    dispatch(loginUser(values)).then(() => {
      navigate("/packages");
    });
  };

  return (
    <AuthLayout>
      <Form
        name="basic"
        layout="vertical"
        style={formStyle}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item<FieldType>
          label="Adınız Soyadınız"
          name="fullName"
          rules={[{ required: true }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email Adresiniz"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} />
        </Form.Item>

        <Form.Item style={{ marginTop: "30px" }}>
          <Button type="primary" htmlType="submit" block>
            Devam Et
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Login;
