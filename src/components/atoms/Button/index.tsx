import { IChildren } from "../../../types";
import { Container } from "./styles";

interface IProps extends IChildren {
  onClick?: (any: any) => any;
}

export default function Button({ onClick, children }: IProps) {
  return <Container onClick={onClick}>{children}</Container>;
}
