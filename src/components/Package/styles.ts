import { colors } from "theme";

export const mainFlex = (isSelected: boolean) => ({
  borderRadius: "8px",
  backgroundColor: colors.smoke,
  height: "160px",
  border: isSelected
    ? `2px solid ${colors.selectedGreen}`
    : "2px solid transparent",
});
export const childFlex: React.CSSProperties = {
  padding: "22px 25px 0 22px",
  width: "100%",
};
export const resetMargin: React.CSSProperties = {
  margin: "0",
};
export const listStyle: React.CSSProperties = {
  marginTop: "14px",
};
export const tagsFlex: React.CSSProperties = {
  borderTop: `1px solid ${colors.borderGray}`,
};
export const tagStyle: React.CSSProperties = {
  padding: "4px 15px",
  backgroundColor: colors.lightGray,
  borderRadius: "8px",
  fontSize: "12px",
  margin: "6px 0 7px 0",
};
