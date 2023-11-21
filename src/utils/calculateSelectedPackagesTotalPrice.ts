import { IPackage } from "api/types";

interface CalculateProps {
  basket: IPackage[];
}

const calculateSelectedPackagesTotalPrice = ({
  basket,
}: CalculateProps): number => {
  return basket.reduce((total, packet) => {
    return total + packet.amount;
  }, 0);
};
export default calculateSelectedPackagesTotalPrice;
