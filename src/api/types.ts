export type loginBody = {
  fullName: string;
  mail: string;
};

export type paymentBody = {
  packageIds: [string];
  cardHolderName: string;
  cardNumber: string;
  expireDate: string;
  totalAmount: number;
};
export interface IPackage {
  imagePath: string;
  name: string;
  details: [string];
  tags: [string];
  amount: number;
  currency: string;
  id: string;
}
export interface IGetContract {
  content: string;
}
