import { IChildren } from "../../../types";
import { Title as H1Title } from "./styles";

export function Title({ children }: IChildren) {
  return <H1Title className="title">{children}</H1Title>;
}
