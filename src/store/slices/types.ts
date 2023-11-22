import { IPackage } from "api/types";

export type IPackagesInitialState = {
  packages: IPackage[];
  selectedPackage: IPackage | null;
  isLoading: boolean;
  error: any;
};

export type IBasketInitialState = {
  myBasket: IPackage[];
};
export type IPaymentInitialState = {
  isLoading: boolean;
  error: any;
  contractText: string;
};
