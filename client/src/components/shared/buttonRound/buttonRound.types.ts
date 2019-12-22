export interface IProps {
  type?: "button" | "submit" | "reset";
  color?: string;
  inverted?: boolean;
  onClick?: () => void;
}
