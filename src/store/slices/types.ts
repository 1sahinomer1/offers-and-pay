import { IPackage } from "api/types";

export type IPackagesInitialState = {
  packages: IPackage[];
  isLoading: boolean;
  error: any;
};

export type IBasketInitialState = {
  myBasket: IPackage[];
};
