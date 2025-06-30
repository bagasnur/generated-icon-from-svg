export type FontIconId =
  | "dashboard";

export type FontIconKey =
  | "Dashboard";

export enum FontIcon {
  Dashboard = "dashboard",
}

export const FONT_ICON_CODEPOINTS: { [key in FontIcon]: string } = {
  [FontIcon.Dashboard]: "61697",
};
