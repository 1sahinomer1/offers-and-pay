import { Result } from "antd";
import { MainLayout } from "layouts";

const SuccessPage = () => {
  return (
    <MainLayout>
      <Result
        status="success"
        title="Başarıyla Tamamlandı!"
        subTitle=""
        style={{ width: "100%" }}
        extra={[]}
      />
    </MainLayout>
  );
};

export default SuccessPage;
