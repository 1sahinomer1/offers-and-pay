export type loginBody = {
  fullName: string;
  mail: string;
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
